import Ajv from 'ajv'

export class SchemaValidator {
    public static validate(data: object, schema: object) {
        const ajv = new Ajv()
        const validate = ajv.compile(schema)

        return {
            isValid: validate(data),
            errors: validate.errors,
        }
    }
}
