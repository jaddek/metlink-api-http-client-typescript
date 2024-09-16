import Ajv from "ajv";

export class SchemaValidator {
    public static validate(data: any, schema: {}): {
        isValid: boolean | PromiseLike<boolean>;
        errors: any,
    } {
        const ajv = new Ajv();
        const validate = ajv.compile(schema)

        return {
            isValid: validate(data),
            errors: validate.errors
        }
    }
}