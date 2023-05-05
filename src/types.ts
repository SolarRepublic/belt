import type {A} from 'ts-toolbelt';

/**
 * Shortcut for a very common type pattern
 */
export type Dict<w_value=string> = Record<string, w_value>;


/**
 * Shortcut for another common type pattern
 */
export type Promisable<w_value=unknown> = w_value | Promise<w_value>;

/**
 * Shortcut for another common type pattern
 */
export type Arrayable<w_value> = w_value | Array<w_value>;

/**
 * Shortcut for another common type pattern
 */
export type Nilable<w_value> = w_value | null | undefined;



/**
 * Root type for all objects considered to be parsed JSON objects
 */
export interface JsonObject<w_inject extends any=never> {  // eslint-disable-line
	[k: string]: JsonValue<w_inject>;
}

/**
 * Union of "valuable", primitive JSON value types
 */
export type JsonPrimitive =
	| boolean
	| number
	| string;

/**
 * All primitive JSON value types
 */
export type JsonPrimitiveNullable<w_inject extends any=never> =
	| JsonPrimitive
	| null
	| w_inject;

/**
 * JSON Array
 */
export type JsonArray<w_inject extends any=never> = JsonValue<w_inject>[];

/**
 * All JSON value types
 */
export type JsonValue<w_inject extends any=never> =
	| JsonPrimitiveNullable<w_inject>
	| JsonArray<w_inject>
	| JsonObject<w_inject>
	| Arrayable<undefined>;

/**
 * Removes JSON interfaces from a type
 */
export type RemoveJsonInterfaces<w_type> = Exclude<A.Compute<Exclude<Extract<w_type, object>, JsonArray>>, JsonObject>;
