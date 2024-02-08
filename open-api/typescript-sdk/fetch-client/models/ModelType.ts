/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ModelType = {
    FacialRecognition: 'facial-recognition',
    Clip: 'clip'
} as const;
export type ModelType = typeof ModelType[keyof typeof ModelType];


export function ModelTypeFromJSON(json: any): ModelType {
    return ModelTypeFromJSONTyped(json, false);
}

export function ModelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelType {
    return json as ModelType;
}

export function ModelTypeToJSON(value?: ModelType | null): any {
    return value as any;
}
