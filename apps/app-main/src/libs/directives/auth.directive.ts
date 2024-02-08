import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";
import { defaultFieldResolver, GraphQLError, GraphQLSchema } from "graphql";
import { get } from "lodash";
import { ResolversTypes } from "../types";

type TValidator<T> = {
  [P in keyof T]: (input: T[P]) => Promise<boolean>;
};

export const validator: TValidator<Pick<ResolversTypes, "HelloInput">> = {
  HelloInput: async (input) => {
    if (input.displayName === "Pass") return true;
    else return false;
  },
};

export const authDirectiveTransformer = (schema: GraphQLSchema) =>
  mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName) => {
      const serviceAdminDirective = getDirective(schema, fieldConfig, "serviceAdmin")?.[0];
      if (serviceAdminDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = function (source, args, context, info) {
          if (context.serviceAdmin) return resolve(source, args, context, info);
          throw new GraphQLError("invalid service token");
        };
        return fieldConfig;
      }

      const validatorDirective = getDirective(schema, fieldConfig, "validator")?.[0];
      if (validatorDirective) {
        const { where, input } = validatorDirective;
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async function (source, args, context, info) {
          if (await validator[input as keyof typeof validator](get(args, where))) return resolve(source, args, context, info);
          throw new GraphQLError("validation error");
        };
        return fieldConfig;
      }
    },
  });
