
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Coach
 * 
 */
export type Coach = $Result.DefaultSelection<Prisma.$CoachPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model GlobalExercise
 * 
 */
export type GlobalExercise = $Result.DefaultSelection<Prisma.$GlobalExercisePayload>
/**
 * Model CoachExercise
 * 
 */
export type CoachExercise = $Result.DefaultSelection<Prisma.$CoachExercisePayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model ProgressLog
 * 
 */
export type ProgressLog = $Result.DefaultSelection<Prisma.$ProgressLogPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  coach: 'coach',
  client: 'client',
  team_coach: 'team_coach',
  superadmin: 'superadmin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const WeightType: {
  bodyweight: 'bodyweight',
  kettlebell: 'kettlebell',
  dumbbell: 'dumbbell',
  band: 'band',
  machine: 'machine',
  other: 'other'
};

export type WeightType = (typeof WeightType)[keyof typeof WeightType]


export const WeightMeasurementType: {
  lbs: 'lbs',
  kg: 'kg',
  other: 'other'
};

export type WeightMeasurementType = (typeof WeightMeasurementType)[keyof typeof WeightMeasurementType]


export const AssignmentStatus: {
  planned: 'planned',
  in_progress: 'in_progress',
  complete: 'complete'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const PaymentStatus: {
  paid: 'paid',
  failed: 'failed',
  pending: 'pending'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type WeightType = $Enums.WeightType

export const WeightType: typeof $Enums.WeightType

export type WeightMeasurementType = $Enums.WeightMeasurementType

export const WeightMeasurementType: typeof $Enums.WeightMeasurementType

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coach`: Exposes CRUD operations for the **Coach** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coaches
    * const coaches = await prisma.coach.findMany()
    * ```
    */
  get coach(): Prisma.CoachDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalExercise`: Exposes CRUD operations for the **GlobalExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalExercises
    * const globalExercises = await prisma.globalExercise.findMany()
    * ```
    */
  get globalExercise(): Prisma.GlobalExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachExercise`: Exposes CRUD operations for the **CoachExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachExercises
    * const coachExercises = await prisma.coachExercise.findMany()
    * ```
    */
  get coachExercise(): Prisma.CoachExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressLog`: Exposes CRUD operations for the **ProgressLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressLogs
    * const progressLogs = await prisma.progressLog.findMany()
    * ```
    */
  get progressLog(): Prisma.ProgressLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Coach: 'Coach',
    Client: 'Client',
    GlobalExercise: 'GlobalExercise',
    CoachExercise: 'CoachExercise',
    Workout: 'Workout',
    Assignment: 'Assignment',
    ProgressLog: 'ProgressLog',
    Message: 'Message',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "coach" | "client" | "globalExercise" | "coachExercise" | "workout" | "assignment" | "progressLog" | "message" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Coach: {
        payload: Prisma.$CoachPayload<ExtArgs>
        fields: Prisma.CoachFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          findFirst: {
            args: Prisma.CoachFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          findMany: {
            args: Prisma.CoachFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          create: {
            args: Prisma.CoachCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          createMany: {
            args: Prisma.CoachCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          delete: {
            args: Prisma.CoachDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          update: {
            args: Prisma.CoachUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          deleteMany: {
            args: Prisma.CoachDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          upsert: {
            args: Prisma.CoachUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          aggregate: {
            args: Prisma.CoachAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoach>
          }
          groupBy: {
            args: Prisma.CoachGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachCountArgs<ExtArgs>
            result: $Utils.Optional<CoachCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      GlobalExercise: {
        payload: Prisma.$GlobalExercisePayload<ExtArgs>
        fields: Prisma.GlobalExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>
          }
          findFirst: {
            args: Prisma.GlobalExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>
          }
          findMany: {
            args: Prisma.GlobalExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>[]
          }
          create: {
            args: Prisma.GlobalExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>
          }
          createMany: {
            args: Prisma.GlobalExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>[]
          }
          delete: {
            args: Prisma.GlobalExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>
          }
          update: {
            args: Prisma.GlobalExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>
          }
          deleteMany: {
            args: Prisma.GlobalExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>[]
          }
          upsert: {
            args: Prisma.GlobalExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalExercisePayload>
          }
          aggregate: {
            args: Prisma.GlobalExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalExercise>
          }
          groupBy: {
            args: Prisma.GlobalExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalExerciseCountAggregateOutputType> | number
          }
        }
      }
      CoachExercise: {
        payload: Prisma.$CoachExercisePayload<ExtArgs>
        fields: Prisma.CoachExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>
          }
          findFirst: {
            args: Prisma.CoachExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>
          }
          findMany: {
            args: Prisma.CoachExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>[]
          }
          create: {
            args: Prisma.CoachExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>
          }
          createMany: {
            args: Prisma.CoachExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>[]
          }
          delete: {
            args: Prisma.CoachExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>
          }
          update: {
            args: Prisma.CoachExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>
          }
          deleteMany: {
            args: Prisma.CoachExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>[]
          }
          upsert: {
            args: Prisma.CoachExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachExercisePayload>
          }
          aggregate: {
            args: Prisma.CoachExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachExercise>
          }
          groupBy: {
            args: Prisma.CoachExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<CoachExerciseCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      ProgressLog: {
        payload: Prisma.$ProgressLogPayload<ExtArgs>
        fields: Prisma.ProgressLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          findFirst: {
            args: Prisma.ProgressLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          findMany: {
            args: Prisma.ProgressLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          create: {
            args: Prisma.ProgressLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          createMany: {
            args: Prisma.ProgressLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          delete: {
            args: Prisma.ProgressLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          update: {
            args: Prisma.ProgressLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          deleteMany: {
            args: Prisma.ProgressLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          upsert: {
            args: Prisma.ProgressLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          aggregate: {
            args: Prisma.ProgressLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressLog>
          }
          groupBy: {
            args: Prisma.ProgressLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressLogCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    coach?: CoachOmit
    client?: ClientOmit
    globalExercise?: GlobalExerciseOmit
    coachExercise?: CoachExerciseOmit
    workout?: WorkoutOmit
    assignment?: AssignmentOmit
    progressLog?: ProgressLogOmit
    message?: MessageOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdExercises: number
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdExercises?: boolean | UserCountOutputTypeCountCreatedExercisesArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalExerciseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type CoachCountOutputType
   */

  export type CoachCountOutputType = {
    exercises: number
    workouts: number
    clients: number
    payments: number
  }

  export type CoachCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | CoachCountOutputTypeCountExercisesArgs
    workouts?: boolean | CoachCountOutputTypeCountWorkoutsArgs
    clients?: boolean | CoachCountOutputTypeCountClientsArgs
    payments?: boolean | CoachCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachCountOutputType
     */
    select?: CoachCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachExerciseWhereInput
  }

  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * CoachCountOutputType without action
   */
  export type CoachCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    assignments: number
    progressLogs: number
    payments: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ClientCountOutputTypeCountAssignmentsArgs
    progressLogs?: boolean | ClientCountOutputTypeCountProgressLogsArgs
    payments?: boolean | ClientCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type GlobalExerciseCountOutputType
   */

  export type GlobalExerciseCountOutputType = {
    coachExercises: number
  }

  export type GlobalExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coachExercises?: boolean | GlobalExerciseCountOutputTypeCountCoachExercisesArgs
  }

  // Custom InputTypes
  /**
   * GlobalExerciseCountOutputType without action
   */
  export type GlobalExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExerciseCountOutputType
     */
    select?: GlobalExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlobalExerciseCountOutputType without action
   */
  export type GlobalExerciseCountOutputTypeCountCoachExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachExerciseWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    assignments: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | WorkoutCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    progressLogs: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressLogs?: boolean | AssignmentCountOutputTypeCountProgressLogsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    stripeCustomerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    stripeCustomerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    profileInfo: number
    stripeCustomerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    stripeCustomerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    stripeCustomerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    profileInfo?: true
    stripeCustomerId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonValue
    stripeCustomerId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileInfo?: boolean
    stripeCustomerId?: boolean
    coach?: boolean | User$coachArgs<ExtArgs>
    client?: boolean | User$clientArgs<ExtArgs>
    createdExercises?: boolean | User$createdExercisesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileInfo?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileInfo?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileInfo?: boolean
    stripeCustomerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "profileInfo" | "stripeCustomerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | User$coachArgs<ExtArgs>
    client?: boolean | User$clientArgs<ExtArgs>
    createdExercises?: boolean | User$createdExercisesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      coach: Prisma.$CoachPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      createdExercises: Prisma.$GlobalExercisePayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.Role
      profileInfo: Prisma.JsonValue
      stripeCustomerId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends User$coachArgs<ExtArgs> = {}>(args?: Subset<T, User$coachArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends User$clientArgs<ExtArgs> = {}>(args?: Subset<T, User$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdExercises<T extends User$createdExercisesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profileInfo: FieldRef<"User", 'Json'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.coach
   */
  export type User$coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    where?: CoachWhereInput
  }

  /**
   * User.client
   */
  export type User$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * User.createdExercises
   */
  export type User$createdExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    where?: GlobalExerciseWhereInput
    orderBy?: GlobalExerciseOrderByWithRelationInput | GlobalExerciseOrderByWithRelationInput[]
    cursor?: GlobalExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlobalExerciseScalarFieldEnum | GlobalExerciseScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Coach
   */

  export type AggregateCoach = {
    _count: CoachCountAggregateOutputType | null
    _min: CoachMinAggregateOutputType | null
    _max: CoachMaxAggregateOutputType | null
  }

  export type CoachMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    subscriptionPlan: string | null
    subscriptionId: string | null
  }

  export type CoachMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    subscriptionPlan: string | null
    subscriptionId: string | null
  }

  export type CoachCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    subscriptionPlan: number
    subscriptionId: number
    _all: number
  }


  export type CoachMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    subscriptionPlan?: true
    subscriptionId?: true
  }

  export type CoachMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    subscriptionPlan?: true
    subscriptionId?: true
  }

  export type CoachCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    subscriptionPlan?: true
    subscriptionId?: true
    _all?: true
  }

  export type CoachAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coach to aggregate.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coaches
    **/
    _count?: true | CoachCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachMaxAggregateInputType
  }

  export type GetCoachAggregateType<T extends CoachAggregateArgs> = {
        [P in keyof T & keyof AggregateCoach]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoach[P]>
      : GetScalarType<T[P], AggregateCoach[P]>
  }




  export type CoachGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachWhereInput
    orderBy?: CoachOrderByWithAggregationInput | CoachOrderByWithAggregationInput[]
    by: CoachScalarFieldEnum[] | CoachScalarFieldEnum
    having?: CoachScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachCountAggregateInputType | true
    _min?: CoachMinAggregateInputType
    _max?: CoachMaxAggregateInputType
  }

  export type CoachGroupByOutputType = {
    id: string
    userId: string
    businessName: string | null
    subscriptionPlan: string | null
    subscriptionId: string | null
    _count: CoachCountAggregateOutputType | null
    _min: CoachMinAggregateOutputType | null
    _max: CoachMaxAggregateOutputType | null
  }

  type GetCoachGroupByPayload<T extends CoachGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachGroupByOutputType[P]>
            : GetScalarType<T[P], CoachGroupByOutputType[P]>
        }
      >
    >


  export type CoachSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    subscriptionPlan?: boolean
    subscriptionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Coach$exercisesArgs<ExtArgs>
    workouts?: boolean | Coach$workoutsArgs<ExtArgs>
    clients?: boolean | Coach$clientsArgs<ExtArgs>
    payments?: boolean | Coach$paymentsArgs<ExtArgs>
    _count?: boolean | CoachCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    subscriptionPlan?: boolean
    subscriptionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    subscriptionPlan?: boolean
    subscriptionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    subscriptionPlan?: boolean
    subscriptionId?: boolean
  }

  export type CoachOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "subscriptionPlan" | "subscriptionId", ExtArgs["result"]["coach"]>
  export type CoachInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Coach$exercisesArgs<ExtArgs>
    workouts?: boolean | Coach$workoutsArgs<ExtArgs>
    clients?: boolean | Coach$clientsArgs<ExtArgs>
    payments?: boolean | Coach$paymentsArgs<ExtArgs>
    _count?: boolean | CoachCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoachIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coach"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$CoachExercisePayload<ExtArgs>[]
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string | null
      subscriptionPlan: string | null
      subscriptionId: string | null
    }, ExtArgs["result"]["coach"]>
    composites: {}
  }

  type CoachGetPayload<S extends boolean | null | undefined | CoachDefaultArgs> = $Result.GetResult<Prisma.$CoachPayload, S>

  type CoachCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachCountAggregateInputType | true
    }

  export interface CoachDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coach'], meta: { name: 'Coach' } }
    /**
     * Find zero or one Coach that matches the filter.
     * @param {CoachFindUniqueArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachFindUniqueArgs>(args: SelectSubset<T, CoachFindUniqueArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coach that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachFindUniqueOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachFindFirstArgs>(args?: SelectSubset<T, CoachFindFirstArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coaches
     * const coaches = await prisma.coach.findMany()
     * 
     * // Get first 10 Coaches
     * const coaches = await prisma.coach.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachWithIdOnly = await prisma.coach.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachFindManyArgs>(args?: SelectSubset<T, CoachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coach.
     * @param {CoachCreateArgs} args - Arguments to create a Coach.
     * @example
     * // Create one Coach
     * const Coach = await prisma.coach.create({
     *   data: {
     *     // ... data to create a Coach
     *   }
     * })
     * 
     */
    create<T extends CoachCreateArgs>(args: SelectSubset<T, CoachCreateArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coaches.
     * @param {CoachCreateManyArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachCreateManyArgs>(args?: SelectSubset<T, CoachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coaches and returns the data saved in the database.
     * @param {CoachCreateManyAndReturnArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coaches and only return the `id`
     * const coachWithIdOnly = await prisma.coach.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coach.
     * @param {CoachDeleteArgs} args - Arguments to delete one Coach.
     * @example
     * // Delete one Coach
     * const Coach = await prisma.coach.delete({
     *   where: {
     *     // ... filter to delete one Coach
     *   }
     * })
     * 
     */
    delete<T extends CoachDeleteArgs>(args: SelectSubset<T, CoachDeleteArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coach.
     * @param {CoachUpdateArgs} args - Arguments to update one Coach.
     * @example
     * // Update one Coach
     * const coach = await prisma.coach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachUpdateArgs>(args: SelectSubset<T, CoachUpdateArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coaches.
     * @param {CoachDeleteManyArgs} args - Arguments to filter Coaches to delete.
     * @example
     * // Delete a few Coaches
     * const { count } = await prisma.coach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachDeleteManyArgs>(args?: SelectSubset<T, CoachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachUpdateManyArgs>(args: SelectSubset<T, CoachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches and returns the data updated in the database.
     * @param {CoachUpdateManyAndReturnArgs} args - Arguments to update many Coaches.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coaches and only return the `id`
     * const coachWithIdOnly = await prisma.coach.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coach.
     * @param {CoachUpsertArgs} args - Arguments to update or create a Coach.
     * @example
     * // Update or create a Coach
     * const coach = await prisma.coach.upsert({
     *   create: {
     *     // ... data to create a Coach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coach we want to update
     *   }
     * })
     */
    upsert<T extends CoachUpsertArgs>(args: SelectSubset<T, CoachUpsertArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachCountArgs} args - Arguments to filter Coaches to count.
     * @example
     * // Count the number of Coaches
     * const count = await prisma.coach.count({
     *   where: {
     *     // ... the filter for the Coaches we want to count
     *   }
     * })
    **/
    count<T extends CoachCountArgs>(
      args?: Subset<T, CoachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoachAggregateArgs>(args: Subset<T, CoachAggregateArgs>): Prisma.PrismaPromise<GetCoachAggregateType<T>>

    /**
     * Group by Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachGroupByArgs['orderBy'] }
        : { orderBy?: CoachGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coach model
   */
  readonly fields: CoachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends Coach$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Coach$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends Coach$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, Coach$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends Coach$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Coach$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Coach$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Coach$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coach model
   */
  interface CoachFieldRefs {
    readonly id: FieldRef<"Coach", 'String'>
    readonly userId: FieldRef<"Coach", 'String'>
    readonly businessName: FieldRef<"Coach", 'String'>
    readonly subscriptionPlan: FieldRef<"Coach", 'String'>
    readonly subscriptionId: FieldRef<"Coach", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Coach findUnique
   */
  export type CoachFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach findUniqueOrThrow
   */
  export type CoachFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach findFirst
   */
  export type CoachFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach findFirstOrThrow
   */
  export type CoachFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach findMany
   */
  export type CoachFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach create
   */
  export type CoachCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * The data needed to create a Coach.
     */
    data: XOR<CoachCreateInput, CoachUncheckedCreateInput>
  }

  /**
   * Coach createMany
   */
  export type CoachCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coach createManyAndReturn
   */
  export type CoachCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coach update
   */
  export type CoachUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * The data needed to update a Coach.
     */
    data: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>
    /**
     * Choose, which Coach to update.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach updateMany
   */
  export type CoachUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
  }

  /**
   * Coach updateManyAndReturn
   */
  export type CoachUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coach upsert
   */
  export type CoachUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * The filter to search for the Coach to update in case it exists.
     */
    where: CoachWhereUniqueInput
    /**
     * In case the Coach found by the `where` argument doesn't exist, create a new Coach with this data.
     */
    create: XOR<CoachCreateInput, CoachUncheckedCreateInput>
    /**
     * In case the Coach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>
  }

  /**
   * Coach delete
   */
  export type CoachDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
    /**
     * Filter which Coach to delete.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach deleteMany
   */
  export type CoachDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coaches to delete
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to delete.
     */
    limit?: number
  }

  /**
   * Coach.exercises
   */
  export type Coach$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    where?: CoachExerciseWhereInput
    orderBy?: CoachExerciseOrderByWithRelationInput | CoachExerciseOrderByWithRelationInput[]
    cursor?: CoachExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachExerciseScalarFieldEnum | CoachExerciseScalarFieldEnum[]
  }

  /**
   * Coach.workouts
   */
  export type Coach$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Coach.clients
   */
  export type Coach$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Coach.payments
   */
  export type Coach$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Coach without action
   */
  export type CoachDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    userId: string | null
    coachId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    coachId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    userId: number
    coachId: number
    onboardingData: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    userId?: true
    coachId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    userId?: true
    coachId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    userId?: true
    coachId?: true
    onboardingData?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    userId: string
    coachId: string
    onboardingData: JsonValue
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coachId?: boolean
    onboardingData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    assignments?: boolean | Client$assignmentsArgs<ExtArgs>
    progressLogs?: boolean | Client$progressLogsArgs<ExtArgs>
    payments?: boolean | Client$paymentsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coachId?: boolean
    onboardingData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coachId?: boolean
    onboardingData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    userId?: boolean
    coachId?: boolean
    onboardingData?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "coachId" | "onboardingData", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    assignments?: boolean | Client$assignmentsArgs<ExtArgs>
    progressLogs?: boolean | Client$progressLogsArgs<ExtArgs>
    payments?: boolean | Client$paymentsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coach: Prisma.$CoachPayload<ExtArgs>
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      progressLogs: Prisma.$ProgressLogPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      coachId: string
      onboardingData: Prisma.JsonValue
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coach<T extends CoachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachDefaultArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Client$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressLogs<T extends Client$progressLogsArgs<ExtArgs> = {}>(args?: Subset<T, Client$progressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Client$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly userId: FieldRef<"Client", 'String'>
    readonly coachId: FieldRef<"Client", 'String'>
    readonly onboardingData: FieldRef<"Client", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.assignments
   */
  export type Client$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Client.progressLogs
   */
  export type Client$progressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * Client.payments
   */
  export type Client$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model GlobalExercise
   */

  export type AggregateGlobalExercise = {
    _count: GlobalExerciseCountAggregateOutputType | null
    _avg: GlobalExerciseAvgAggregateOutputType | null
    _sum: GlobalExerciseSumAggregateOutputType | null
    _min: GlobalExerciseMinAggregateOutputType | null
    _max: GlobalExerciseMaxAggregateOutputType | null
  }

  export type GlobalExerciseAvgAggregateOutputType = {
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
  }

  export type GlobalExerciseSumAggregateOutputType = {
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
  }

  export type GlobalExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    videoUrl: string | null
    instructionsText: string | null
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
    weightType: $Enums.WeightType | null
    weightMeasurementType: $Enums.WeightMeasurementType | null
    createdById: string | null
  }

  export type GlobalExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    videoUrl: string | null
    instructionsText: string | null
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
    weightType: $Enums.WeightType | null
    weightMeasurementType: $Enums.WeightMeasurementType | null
    createdById: string | null
  }

  export type GlobalExerciseCountAggregateOutputType = {
    id: number
    name: number
    videoUrl: number
    instructionsText: number
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: number
    weightMeasurementType: number
    createdById: number
    _all: number
  }


  export type GlobalExerciseAvgAggregateInputType = {
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
  }

  export type GlobalExerciseSumAggregateInputType = {
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
  }

  export type GlobalExerciseMinAggregateInputType = {
    id?: true
    name?: true
    videoUrl?: true
    instructionsText?: true
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
    weightType?: true
    weightMeasurementType?: true
    createdById?: true
  }

  export type GlobalExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    videoUrl?: true
    instructionsText?: true
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
    weightType?: true
    weightMeasurementType?: true
    createdById?: true
  }

  export type GlobalExerciseCountAggregateInputType = {
    id?: true
    name?: true
    videoUrl?: true
    instructionsText?: true
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
    weightType?: true
    weightMeasurementType?: true
    createdById?: true
    _all?: true
  }

  export type GlobalExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalExercise to aggregate.
     */
    where?: GlobalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalExercises to fetch.
     */
    orderBy?: GlobalExerciseOrderByWithRelationInput | GlobalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalExercises
    **/
    _count?: true | GlobalExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalExerciseMaxAggregateInputType
  }

  export type GetGlobalExerciseAggregateType<T extends GlobalExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalExercise[P]>
      : GetScalarType<T[P], AggregateGlobalExercise[P]>
  }




  export type GlobalExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalExerciseWhereInput
    orderBy?: GlobalExerciseOrderByWithAggregationInput | GlobalExerciseOrderByWithAggregationInput[]
    by: GlobalExerciseScalarFieldEnum[] | GlobalExerciseScalarFieldEnum
    having?: GlobalExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalExerciseCountAggregateInputType | true
    _avg?: GlobalExerciseAvgAggregateInputType
    _sum?: GlobalExerciseSumAggregateInputType
    _min?: GlobalExerciseMinAggregateInputType
    _max?: GlobalExerciseMaxAggregateInputType
  }

  export type GlobalExerciseGroupByOutputType = {
    id: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    createdById: string
    _count: GlobalExerciseCountAggregateOutputType | null
    _avg: GlobalExerciseAvgAggregateOutputType | null
    _sum: GlobalExerciseSumAggregateOutputType | null
    _min: GlobalExerciseMinAggregateOutputType | null
    _max: GlobalExerciseMaxAggregateOutputType | null
  }

  type GetGlobalExerciseGroupByPayload<T extends GlobalExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalExerciseGroupByOutputType[P]>
        }
      >
    >


  export type GlobalExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    coachExercises?: boolean | GlobalExercise$coachExercisesArgs<ExtArgs>
    _count?: boolean | GlobalExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalExercise"]>

  export type GlobalExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalExercise"]>

  export type GlobalExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalExercise"]>

  export type GlobalExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    createdById?: boolean
  }

  export type GlobalExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "videoUrl" | "instructionsText" | "defaultSets" | "defaultReps" | "defaultWeight" | "weightType" | "weightMeasurementType" | "createdById", ExtArgs["result"]["globalExercise"]>
  export type GlobalExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    coachExercises?: boolean | GlobalExercise$coachExercisesArgs<ExtArgs>
    _count?: boolean | GlobalExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GlobalExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GlobalExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GlobalExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalExercise"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      coachExercises: Prisma.$CoachExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      videoUrl: string
      instructionsText: string
      defaultSets: number
      defaultReps: number
      defaultWeight: number
      weightType: $Enums.WeightType
      weightMeasurementType: $Enums.WeightMeasurementType
      createdById: string
    }, ExtArgs["result"]["globalExercise"]>
    composites: {}
  }

  type GlobalExerciseGetPayload<S extends boolean | null | undefined | GlobalExerciseDefaultArgs> = $Result.GetResult<Prisma.$GlobalExercisePayload, S>

  type GlobalExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalExerciseCountAggregateInputType | true
    }

  export interface GlobalExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalExercise'], meta: { name: 'GlobalExercise' } }
    /**
     * Find zero or one GlobalExercise that matches the filter.
     * @param {GlobalExerciseFindUniqueArgs} args - Arguments to find a GlobalExercise
     * @example
     * // Get one GlobalExercise
     * const globalExercise = await prisma.globalExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalExerciseFindUniqueArgs>(args: SelectSubset<T, GlobalExerciseFindUniqueArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalExerciseFindUniqueOrThrowArgs} args - Arguments to find a GlobalExercise
     * @example
     * // Get one GlobalExercise
     * const globalExercise = await prisma.globalExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseFindFirstArgs} args - Arguments to find a GlobalExercise
     * @example
     * // Get one GlobalExercise
     * const globalExercise = await prisma.globalExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalExerciseFindFirstArgs>(args?: SelectSubset<T, GlobalExerciseFindFirstArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseFindFirstOrThrowArgs} args - Arguments to find a GlobalExercise
     * @example
     * // Get one GlobalExercise
     * const globalExercise = await prisma.globalExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalExercises
     * const globalExercises = await prisma.globalExercise.findMany()
     * 
     * // Get first 10 GlobalExercises
     * const globalExercises = await prisma.globalExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalExerciseWithIdOnly = await prisma.globalExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalExerciseFindManyArgs>(args?: SelectSubset<T, GlobalExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalExercise.
     * @param {GlobalExerciseCreateArgs} args - Arguments to create a GlobalExercise.
     * @example
     * // Create one GlobalExercise
     * const GlobalExercise = await prisma.globalExercise.create({
     *   data: {
     *     // ... data to create a GlobalExercise
     *   }
     * })
     * 
     */
    create<T extends GlobalExerciseCreateArgs>(args: SelectSubset<T, GlobalExerciseCreateArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalExercises.
     * @param {GlobalExerciseCreateManyArgs} args - Arguments to create many GlobalExercises.
     * @example
     * // Create many GlobalExercises
     * const globalExercise = await prisma.globalExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalExerciseCreateManyArgs>(args?: SelectSubset<T, GlobalExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalExercises and returns the data saved in the database.
     * @param {GlobalExerciseCreateManyAndReturnArgs} args - Arguments to create many GlobalExercises.
     * @example
     * // Create many GlobalExercises
     * const globalExercise = await prisma.globalExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalExercises and only return the `id`
     * const globalExerciseWithIdOnly = await prisma.globalExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalExercise.
     * @param {GlobalExerciseDeleteArgs} args - Arguments to delete one GlobalExercise.
     * @example
     * // Delete one GlobalExercise
     * const GlobalExercise = await prisma.globalExercise.delete({
     *   where: {
     *     // ... filter to delete one GlobalExercise
     *   }
     * })
     * 
     */
    delete<T extends GlobalExerciseDeleteArgs>(args: SelectSubset<T, GlobalExerciseDeleteArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalExercise.
     * @param {GlobalExerciseUpdateArgs} args - Arguments to update one GlobalExercise.
     * @example
     * // Update one GlobalExercise
     * const globalExercise = await prisma.globalExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalExerciseUpdateArgs>(args: SelectSubset<T, GlobalExerciseUpdateArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalExercises.
     * @param {GlobalExerciseDeleteManyArgs} args - Arguments to filter GlobalExercises to delete.
     * @example
     * // Delete a few GlobalExercises
     * const { count } = await prisma.globalExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalExerciseDeleteManyArgs>(args?: SelectSubset<T, GlobalExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalExercises
     * const globalExercise = await prisma.globalExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalExerciseUpdateManyArgs>(args: SelectSubset<T, GlobalExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalExercises and returns the data updated in the database.
     * @param {GlobalExerciseUpdateManyAndReturnArgs} args - Arguments to update many GlobalExercises.
     * @example
     * // Update many GlobalExercises
     * const globalExercise = await prisma.globalExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalExercises and only return the `id`
     * const globalExerciseWithIdOnly = await prisma.globalExercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalExercise.
     * @param {GlobalExerciseUpsertArgs} args - Arguments to update or create a GlobalExercise.
     * @example
     * // Update or create a GlobalExercise
     * const globalExercise = await prisma.globalExercise.upsert({
     *   create: {
     *     // ... data to create a GlobalExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalExercise we want to update
     *   }
     * })
     */
    upsert<T extends GlobalExerciseUpsertArgs>(args: SelectSubset<T, GlobalExerciseUpsertArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseCountArgs} args - Arguments to filter GlobalExercises to count.
     * @example
     * // Count the number of GlobalExercises
     * const count = await prisma.globalExercise.count({
     *   where: {
     *     // ... the filter for the GlobalExercises we want to count
     *   }
     * })
    **/
    count<T extends GlobalExerciseCountArgs>(
      args?: Subset<T, GlobalExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalExerciseAggregateArgs>(args: Subset<T, GlobalExerciseAggregateArgs>): Prisma.PrismaPromise<GetGlobalExerciseAggregateType<T>>

    /**
     * Group by GlobalExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalExerciseGroupByArgs['orderBy'] }
        : { orderBy?: GlobalExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalExercise model
   */
  readonly fields: GlobalExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coachExercises<T extends GlobalExercise$coachExercisesArgs<ExtArgs> = {}>(args?: Subset<T, GlobalExercise$coachExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalExercise model
   */
  interface GlobalExerciseFieldRefs {
    readonly id: FieldRef<"GlobalExercise", 'String'>
    readonly name: FieldRef<"GlobalExercise", 'String'>
    readonly videoUrl: FieldRef<"GlobalExercise", 'String'>
    readonly instructionsText: FieldRef<"GlobalExercise", 'String'>
    readonly defaultSets: FieldRef<"GlobalExercise", 'Int'>
    readonly defaultReps: FieldRef<"GlobalExercise", 'Int'>
    readonly defaultWeight: FieldRef<"GlobalExercise", 'Float'>
    readonly weightType: FieldRef<"GlobalExercise", 'WeightType'>
    readonly weightMeasurementType: FieldRef<"GlobalExercise", 'WeightMeasurementType'>
    readonly createdById: FieldRef<"GlobalExercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GlobalExercise findUnique
   */
  export type GlobalExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which GlobalExercise to fetch.
     */
    where: GlobalExerciseWhereUniqueInput
  }

  /**
   * GlobalExercise findUniqueOrThrow
   */
  export type GlobalExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which GlobalExercise to fetch.
     */
    where: GlobalExerciseWhereUniqueInput
  }

  /**
   * GlobalExercise findFirst
   */
  export type GlobalExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which GlobalExercise to fetch.
     */
    where?: GlobalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalExercises to fetch.
     */
    orderBy?: GlobalExerciseOrderByWithRelationInput | GlobalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalExercises.
     */
    cursor?: GlobalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalExercises.
     */
    distinct?: GlobalExerciseScalarFieldEnum | GlobalExerciseScalarFieldEnum[]
  }

  /**
   * GlobalExercise findFirstOrThrow
   */
  export type GlobalExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which GlobalExercise to fetch.
     */
    where?: GlobalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalExercises to fetch.
     */
    orderBy?: GlobalExerciseOrderByWithRelationInput | GlobalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalExercises.
     */
    cursor?: GlobalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalExercises.
     */
    distinct?: GlobalExerciseScalarFieldEnum | GlobalExerciseScalarFieldEnum[]
  }

  /**
   * GlobalExercise findMany
   */
  export type GlobalExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which GlobalExercises to fetch.
     */
    where?: GlobalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalExercises to fetch.
     */
    orderBy?: GlobalExerciseOrderByWithRelationInput | GlobalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalExercises.
     */
    cursor?: GlobalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalExercises.
     */
    skip?: number
    distinct?: GlobalExerciseScalarFieldEnum | GlobalExerciseScalarFieldEnum[]
  }

  /**
   * GlobalExercise create
   */
  export type GlobalExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a GlobalExercise.
     */
    data: XOR<GlobalExerciseCreateInput, GlobalExerciseUncheckedCreateInput>
  }

  /**
   * GlobalExercise createMany
   */
  export type GlobalExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalExercises.
     */
    data: GlobalExerciseCreateManyInput | GlobalExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalExercise createManyAndReturn
   */
  export type GlobalExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalExercises.
     */
    data: GlobalExerciseCreateManyInput | GlobalExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlobalExercise update
   */
  export type GlobalExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a GlobalExercise.
     */
    data: XOR<GlobalExerciseUpdateInput, GlobalExerciseUncheckedUpdateInput>
    /**
     * Choose, which GlobalExercise to update.
     */
    where: GlobalExerciseWhereUniqueInput
  }

  /**
   * GlobalExercise updateMany
   */
  export type GlobalExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalExercises.
     */
    data: XOR<GlobalExerciseUpdateManyMutationInput, GlobalExerciseUncheckedUpdateManyInput>
    /**
     * Filter which GlobalExercises to update
     */
    where?: GlobalExerciseWhereInput
    /**
     * Limit how many GlobalExercises to update.
     */
    limit?: number
  }

  /**
   * GlobalExercise updateManyAndReturn
   */
  export type GlobalExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * The data used to update GlobalExercises.
     */
    data: XOR<GlobalExerciseUpdateManyMutationInput, GlobalExerciseUncheckedUpdateManyInput>
    /**
     * Filter which GlobalExercises to update
     */
    where?: GlobalExerciseWhereInput
    /**
     * Limit how many GlobalExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlobalExercise upsert
   */
  export type GlobalExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the GlobalExercise to update in case it exists.
     */
    where: GlobalExerciseWhereUniqueInput
    /**
     * In case the GlobalExercise found by the `where` argument doesn't exist, create a new GlobalExercise with this data.
     */
    create: XOR<GlobalExerciseCreateInput, GlobalExerciseUncheckedCreateInput>
    /**
     * In case the GlobalExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalExerciseUpdateInput, GlobalExerciseUncheckedUpdateInput>
  }

  /**
   * GlobalExercise delete
   */
  export type GlobalExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
    /**
     * Filter which GlobalExercise to delete.
     */
    where: GlobalExerciseWhereUniqueInput
  }

  /**
   * GlobalExercise deleteMany
   */
  export type GlobalExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalExercises to delete
     */
    where?: GlobalExerciseWhereInput
    /**
     * Limit how many GlobalExercises to delete.
     */
    limit?: number
  }

  /**
   * GlobalExercise.coachExercises
   */
  export type GlobalExercise$coachExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    where?: CoachExerciseWhereInput
    orderBy?: CoachExerciseOrderByWithRelationInput | CoachExerciseOrderByWithRelationInput[]
    cursor?: CoachExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachExerciseScalarFieldEnum | CoachExerciseScalarFieldEnum[]
  }

  /**
   * GlobalExercise without action
   */
  export type GlobalExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalExercise
     */
    select?: GlobalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalExercise
     */
    omit?: GlobalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalExerciseInclude<ExtArgs> | null
  }


  /**
   * Model CoachExercise
   */

  export type AggregateCoachExercise = {
    _count: CoachExerciseCountAggregateOutputType | null
    _avg: CoachExerciseAvgAggregateOutputType | null
    _sum: CoachExerciseSumAggregateOutputType | null
    _min: CoachExerciseMinAggregateOutputType | null
    _max: CoachExerciseMaxAggregateOutputType | null
  }

  export type CoachExerciseAvgAggregateOutputType = {
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
  }

  export type CoachExerciseSumAggregateOutputType = {
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
  }

  export type CoachExerciseMinAggregateOutputType = {
    id: string | null
    coachId: string | null
    baseExerciseId: string | null
    name: string | null
    videoUrl: string | null
    instructionsText: string | null
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
    weightType: $Enums.WeightType | null
    weightMeasurementType: $Enums.WeightMeasurementType | null
  }

  export type CoachExerciseMaxAggregateOutputType = {
    id: string | null
    coachId: string | null
    baseExerciseId: string | null
    name: string | null
    videoUrl: string | null
    instructionsText: string | null
    defaultSets: number | null
    defaultReps: number | null
    defaultWeight: number | null
    weightType: $Enums.WeightType | null
    weightMeasurementType: $Enums.WeightMeasurementType | null
  }

  export type CoachExerciseCountAggregateOutputType = {
    id: number
    coachId: number
    baseExerciseId: number
    name: number
    videoUrl: number
    instructionsText: number
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: number
    weightMeasurementType: number
    _all: number
  }


  export type CoachExerciseAvgAggregateInputType = {
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
  }

  export type CoachExerciseSumAggregateInputType = {
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
  }

  export type CoachExerciseMinAggregateInputType = {
    id?: true
    coachId?: true
    baseExerciseId?: true
    name?: true
    videoUrl?: true
    instructionsText?: true
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
    weightType?: true
    weightMeasurementType?: true
  }

  export type CoachExerciseMaxAggregateInputType = {
    id?: true
    coachId?: true
    baseExerciseId?: true
    name?: true
    videoUrl?: true
    instructionsText?: true
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
    weightType?: true
    weightMeasurementType?: true
  }

  export type CoachExerciseCountAggregateInputType = {
    id?: true
    coachId?: true
    baseExerciseId?: true
    name?: true
    videoUrl?: true
    instructionsText?: true
    defaultSets?: true
    defaultReps?: true
    defaultWeight?: true
    weightType?: true
    weightMeasurementType?: true
    _all?: true
  }

  export type CoachExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachExercise to aggregate.
     */
    where?: CoachExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachExercises to fetch.
     */
    orderBy?: CoachExerciseOrderByWithRelationInput | CoachExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachExercises
    **/
    _count?: true | CoachExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachExerciseMaxAggregateInputType
  }

  export type GetCoachExerciseAggregateType<T extends CoachExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachExercise[P]>
      : GetScalarType<T[P], AggregateCoachExercise[P]>
  }




  export type CoachExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachExerciseWhereInput
    orderBy?: CoachExerciseOrderByWithAggregationInput | CoachExerciseOrderByWithAggregationInput[]
    by: CoachExerciseScalarFieldEnum[] | CoachExerciseScalarFieldEnum
    having?: CoachExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachExerciseCountAggregateInputType | true
    _avg?: CoachExerciseAvgAggregateInputType
    _sum?: CoachExerciseSumAggregateInputType
    _min?: CoachExerciseMinAggregateInputType
    _max?: CoachExerciseMaxAggregateInputType
  }

  export type CoachExerciseGroupByOutputType = {
    id: string
    coachId: string
    baseExerciseId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    _count: CoachExerciseCountAggregateOutputType | null
    _avg: CoachExerciseAvgAggregateOutputType | null
    _sum: CoachExerciseSumAggregateOutputType | null
    _min: CoachExerciseMinAggregateOutputType | null
    _max: CoachExerciseMaxAggregateOutputType | null
  }

  type GetCoachExerciseGroupByPayload<T extends CoachExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], CoachExerciseGroupByOutputType[P]>
        }
      >
    >


  export type CoachExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    baseExerciseId?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    baseExercise?: boolean | GlobalExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachExercise"]>

  export type CoachExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    baseExerciseId?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    baseExercise?: boolean | GlobalExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachExercise"]>

  export type CoachExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    baseExerciseId?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    baseExercise?: boolean | GlobalExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachExercise"]>

  export type CoachExerciseSelectScalar = {
    id?: boolean
    coachId?: boolean
    baseExerciseId?: boolean
    name?: boolean
    videoUrl?: boolean
    instructionsText?: boolean
    defaultSets?: boolean
    defaultReps?: boolean
    defaultWeight?: boolean
    weightType?: boolean
    weightMeasurementType?: boolean
  }

  export type CoachExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coachId" | "baseExerciseId" | "name" | "videoUrl" | "instructionsText" | "defaultSets" | "defaultReps" | "defaultWeight" | "weightType" | "weightMeasurementType", ExtArgs["result"]["coachExercise"]>
  export type CoachExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    baseExercise?: boolean | GlobalExerciseDefaultArgs<ExtArgs>
  }
  export type CoachExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    baseExercise?: boolean | GlobalExerciseDefaultArgs<ExtArgs>
  }
  export type CoachExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    baseExercise?: boolean | GlobalExerciseDefaultArgs<ExtArgs>
  }

  export type $CoachExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachExercise"
    objects: {
      coach: Prisma.$CoachPayload<ExtArgs>
      baseExercise: Prisma.$GlobalExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coachId: string
      baseExerciseId: string
      name: string
      videoUrl: string
      instructionsText: string
      defaultSets: number
      defaultReps: number
      defaultWeight: number
      weightType: $Enums.WeightType
      weightMeasurementType: $Enums.WeightMeasurementType
    }, ExtArgs["result"]["coachExercise"]>
    composites: {}
  }

  type CoachExerciseGetPayload<S extends boolean | null | undefined | CoachExerciseDefaultArgs> = $Result.GetResult<Prisma.$CoachExercisePayload, S>

  type CoachExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachExerciseCountAggregateInputType | true
    }

  export interface CoachExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachExercise'], meta: { name: 'CoachExercise' } }
    /**
     * Find zero or one CoachExercise that matches the filter.
     * @param {CoachExerciseFindUniqueArgs} args - Arguments to find a CoachExercise
     * @example
     * // Get one CoachExercise
     * const coachExercise = await prisma.coachExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachExerciseFindUniqueArgs>(args: SelectSubset<T, CoachExerciseFindUniqueArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachExerciseFindUniqueOrThrowArgs} args - Arguments to find a CoachExercise
     * @example
     * // Get one CoachExercise
     * const coachExercise = await prisma.coachExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseFindFirstArgs} args - Arguments to find a CoachExercise
     * @example
     * // Get one CoachExercise
     * const coachExercise = await prisma.coachExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachExerciseFindFirstArgs>(args?: SelectSubset<T, CoachExerciseFindFirstArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseFindFirstOrThrowArgs} args - Arguments to find a CoachExercise
     * @example
     * // Get one CoachExercise
     * const coachExercise = await prisma.coachExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachExercises
     * const coachExercises = await prisma.coachExercise.findMany()
     * 
     * // Get first 10 CoachExercises
     * const coachExercises = await prisma.coachExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachExerciseWithIdOnly = await prisma.coachExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachExerciseFindManyArgs>(args?: SelectSubset<T, CoachExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachExercise.
     * @param {CoachExerciseCreateArgs} args - Arguments to create a CoachExercise.
     * @example
     * // Create one CoachExercise
     * const CoachExercise = await prisma.coachExercise.create({
     *   data: {
     *     // ... data to create a CoachExercise
     *   }
     * })
     * 
     */
    create<T extends CoachExerciseCreateArgs>(args: SelectSubset<T, CoachExerciseCreateArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachExercises.
     * @param {CoachExerciseCreateManyArgs} args - Arguments to create many CoachExercises.
     * @example
     * // Create many CoachExercises
     * const coachExercise = await prisma.coachExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachExerciseCreateManyArgs>(args?: SelectSubset<T, CoachExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachExercises and returns the data saved in the database.
     * @param {CoachExerciseCreateManyAndReturnArgs} args - Arguments to create many CoachExercises.
     * @example
     * // Create many CoachExercises
     * const coachExercise = await prisma.coachExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachExercises and only return the `id`
     * const coachExerciseWithIdOnly = await prisma.coachExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachExercise.
     * @param {CoachExerciseDeleteArgs} args - Arguments to delete one CoachExercise.
     * @example
     * // Delete one CoachExercise
     * const CoachExercise = await prisma.coachExercise.delete({
     *   where: {
     *     // ... filter to delete one CoachExercise
     *   }
     * })
     * 
     */
    delete<T extends CoachExerciseDeleteArgs>(args: SelectSubset<T, CoachExerciseDeleteArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachExercise.
     * @param {CoachExerciseUpdateArgs} args - Arguments to update one CoachExercise.
     * @example
     * // Update one CoachExercise
     * const coachExercise = await prisma.coachExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachExerciseUpdateArgs>(args: SelectSubset<T, CoachExerciseUpdateArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachExercises.
     * @param {CoachExerciseDeleteManyArgs} args - Arguments to filter CoachExercises to delete.
     * @example
     * // Delete a few CoachExercises
     * const { count } = await prisma.coachExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachExerciseDeleteManyArgs>(args?: SelectSubset<T, CoachExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachExercises
     * const coachExercise = await prisma.coachExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachExerciseUpdateManyArgs>(args: SelectSubset<T, CoachExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachExercises and returns the data updated in the database.
     * @param {CoachExerciseUpdateManyAndReturnArgs} args - Arguments to update many CoachExercises.
     * @example
     * // Update many CoachExercises
     * const coachExercise = await prisma.coachExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachExercises and only return the `id`
     * const coachExerciseWithIdOnly = await prisma.coachExercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachExercise.
     * @param {CoachExerciseUpsertArgs} args - Arguments to update or create a CoachExercise.
     * @example
     * // Update or create a CoachExercise
     * const coachExercise = await prisma.coachExercise.upsert({
     *   create: {
     *     // ... data to create a CoachExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachExercise we want to update
     *   }
     * })
     */
    upsert<T extends CoachExerciseUpsertArgs>(args: SelectSubset<T, CoachExerciseUpsertArgs<ExtArgs>>): Prisma__CoachExerciseClient<$Result.GetResult<Prisma.$CoachExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseCountArgs} args - Arguments to filter CoachExercises to count.
     * @example
     * // Count the number of CoachExercises
     * const count = await prisma.coachExercise.count({
     *   where: {
     *     // ... the filter for the CoachExercises we want to count
     *   }
     * })
    **/
    count<T extends CoachExerciseCountArgs>(
      args?: Subset<T, CoachExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoachExerciseAggregateArgs>(args: Subset<T, CoachExerciseAggregateArgs>): Prisma.PrismaPromise<GetCoachExerciseAggregateType<T>>

    /**
     * Group by CoachExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoachExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachExerciseGroupByArgs['orderBy'] }
        : { orderBy?: CoachExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachExercise model
   */
  readonly fields: CoachExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends CoachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachDefaultArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    baseExercise<T extends GlobalExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GlobalExerciseDefaultArgs<ExtArgs>>): Prisma__GlobalExerciseClient<$Result.GetResult<Prisma.$GlobalExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoachExercise model
   */
  interface CoachExerciseFieldRefs {
    readonly id: FieldRef<"CoachExercise", 'String'>
    readonly coachId: FieldRef<"CoachExercise", 'String'>
    readonly baseExerciseId: FieldRef<"CoachExercise", 'String'>
    readonly name: FieldRef<"CoachExercise", 'String'>
    readonly videoUrl: FieldRef<"CoachExercise", 'String'>
    readonly instructionsText: FieldRef<"CoachExercise", 'String'>
    readonly defaultSets: FieldRef<"CoachExercise", 'Int'>
    readonly defaultReps: FieldRef<"CoachExercise", 'Int'>
    readonly defaultWeight: FieldRef<"CoachExercise", 'Float'>
    readonly weightType: FieldRef<"CoachExercise", 'WeightType'>
    readonly weightMeasurementType: FieldRef<"CoachExercise", 'WeightMeasurementType'>
  }
    

  // Custom InputTypes
  /**
   * CoachExercise findUnique
   */
  export type CoachExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CoachExercise to fetch.
     */
    where: CoachExerciseWhereUniqueInput
  }

  /**
   * CoachExercise findUniqueOrThrow
   */
  export type CoachExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CoachExercise to fetch.
     */
    where: CoachExerciseWhereUniqueInput
  }

  /**
   * CoachExercise findFirst
   */
  export type CoachExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CoachExercise to fetch.
     */
    where?: CoachExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachExercises to fetch.
     */
    orderBy?: CoachExerciseOrderByWithRelationInput | CoachExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachExercises.
     */
    cursor?: CoachExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachExercises.
     */
    distinct?: CoachExerciseScalarFieldEnum | CoachExerciseScalarFieldEnum[]
  }

  /**
   * CoachExercise findFirstOrThrow
   */
  export type CoachExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CoachExercise to fetch.
     */
    where?: CoachExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachExercises to fetch.
     */
    orderBy?: CoachExerciseOrderByWithRelationInput | CoachExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachExercises.
     */
    cursor?: CoachExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachExercises.
     */
    distinct?: CoachExerciseScalarFieldEnum | CoachExerciseScalarFieldEnum[]
  }

  /**
   * CoachExercise findMany
   */
  export type CoachExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CoachExercises to fetch.
     */
    where?: CoachExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachExercises to fetch.
     */
    orderBy?: CoachExerciseOrderByWithRelationInput | CoachExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachExercises.
     */
    cursor?: CoachExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachExercises.
     */
    skip?: number
    distinct?: CoachExerciseScalarFieldEnum | CoachExerciseScalarFieldEnum[]
  }

  /**
   * CoachExercise create
   */
  export type CoachExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachExercise.
     */
    data: XOR<CoachExerciseCreateInput, CoachExerciseUncheckedCreateInput>
  }

  /**
   * CoachExercise createMany
   */
  export type CoachExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachExercises.
     */
    data: CoachExerciseCreateManyInput | CoachExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachExercise createManyAndReturn
   */
  export type CoachExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many CoachExercises.
     */
    data: CoachExerciseCreateManyInput | CoachExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachExercise update
   */
  export type CoachExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachExercise.
     */
    data: XOR<CoachExerciseUpdateInput, CoachExerciseUncheckedUpdateInput>
    /**
     * Choose, which CoachExercise to update.
     */
    where: CoachExerciseWhereUniqueInput
  }

  /**
   * CoachExercise updateMany
   */
  export type CoachExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachExercises.
     */
    data: XOR<CoachExerciseUpdateManyMutationInput, CoachExerciseUncheckedUpdateManyInput>
    /**
     * Filter which CoachExercises to update
     */
    where?: CoachExerciseWhereInput
    /**
     * Limit how many CoachExercises to update.
     */
    limit?: number
  }

  /**
   * CoachExercise updateManyAndReturn
   */
  export type CoachExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * The data used to update CoachExercises.
     */
    data: XOR<CoachExerciseUpdateManyMutationInput, CoachExerciseUncheckedUpdateManyInput>
    /**
     * Filter which CoachExercises to update
     */
    where?: CoachExerciseWhereInput
    /**
     * Limit how many CoachExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachExercise upsert
   */
  export type CoachExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachExercise to update in case it exists.
     */
    where: CoachExerciseWhereUniqueInput
    /**
     * In case the CoachExercise found by the `where` argument doesn't exist, create a new CoachExercise with this data.
     */
    create: XOR<CoachExerciseCreateInput, CoachExerciseUncheckedCreateInput>
    /**
     * In case the CoachExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachExerciseUpdateInput, CoachExerciseUncheckedUpdateInput>
  }

  /**
   * CoachExercise delete
   */
  export type CoachExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
    /**
     * Filter which CoachExercise to delete.
     */
    where: CoachExerciseWhereUniqueInput
  }

  /**
   * CoachExercise deleteMany
   */
  export type CoachExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachExercises to delete
     */
    where?: CoachExerciseWhereInput
    /**
     * Limit how many CoachExercises to delete.
     */
    limit?: number
  }

  /**
   * CoachExercise without action
   */
  export type CoachExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachExercise
     */
    select?: CoachExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachExercise
     */
    omit?: CoachExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    coachId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    coachId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    coachId: number
    title: number
    description: number
    exercises: number
    createdAt: number
    _all: number
  }


  export type WorkoutMinAggregateInputType = {
    id?: true
    coachId?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    coachId?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    coachId?: true
    title?: true
    description?: true
    exercises?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    coachId: string
    title: string
    description: string
    exercises: JsonValue
    createdAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    title?: boolean
    description?: boolean
    exercises?: boolean
    createdAt?: boolean
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    assignments?: boolean | Workout$assignmentsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    title?: boolean
    description?: boolean
    exercises?: boolean
    createdAt?: boolean
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    title?: boolean
    description?: boolean
    exercises?: boolean
    createdAt?: boolean
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    coachId?: boolean
    title?: boolean
    description?: boolean
    exercises?: boolean
    createdAt?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coachId" | "title" | "description" | "exercises" | "createdAt", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachDefaultArgs<ExtArgs>
    assignments?: boolean | Workout$assignmentsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      coach: Prisma.$CoachPayload<ExtArgs>
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coachId: string
      title: string
      description: string
      exercises: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends CoachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachDefaultArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Workout$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Workout$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly coachId: FieldRef<"Workout", 'String'>
    readonly title: FieldRef<"Workout", 'String'>
    readonly description: FieldRef<"Workout", 'String'>
    readonly exercises: FieldRef<"Workout", 'Json'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.assignments
   */
  export type Workout$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    workoutId: string | null
    clientId: string | null
    scheduledDate: Date | null
    status: $Enums.AssignmentStatus | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    workoutId: string | null
    clientId: string | null
    scheduledDate: Date | null
    status: $Enums.AssignmentStatus | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    workoutId: number
    clientId: number
    scheduledDate: number
    status: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    workoutId?: true
    clientId?: true
    scheduledDate?: true
    status?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    workoutId?: true
    clientId?: true
    scheduledDate?: true
    status?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    workoutId?: true
    clientId?: true
    scheduledDate?: true
    status?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    workoutId: string
    clientId: string
    scheduledDate: Date
    status: $Enums.AssignmentStatus
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    status?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    progressLogs?: boolean | Assignment$progressLogsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    status?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    status?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    workoutId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    status?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "clientId" | "scheduledDate" | "status", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    progressLogs?: boolean | Assignment$progressLogsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      progressLogs: Prisma.$ProgressLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutId: string
      clientId: string
      scheduledDate: Date
      status: $Enums.AssignmentStatus
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressLogs<T extends Assignment$progressLogsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$progressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly workoutId: FieldRef<"Assignment", 'String'>
    readonly clientId: FieldRef<"Assignment", 'String'>
    readonly scheduledDate: FieldRef<"Assignment", 'DateTime'>
    readonly status: FieldRef<"Assignment", 'AssignmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.progressLogs
   */
  export type Assignment$progressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ProgressLog
   */

  export type AggregateProgressLog = {
    _count: ProgressLogCountAggregateOutputType | null
    _min: ProgressLogMinAggregateOutputType | null
    _max: ProgressLogMaxAggregateOutputType | null
  }

  export type ProgressLogMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    assignmentId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type ProgressLogMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    assignmentId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type ProgressLogCountAggregateOutputType = {
    id: number
    clientId: number
    assignmentId: number
    exerciseResults: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ProgressLogMinAggregateInputType = {
    id?: true
    clientId?: true
    assignmentId?: true
    notes?: true
    createdAt?: true
  }

  export type ProgressLogMaxAggregateInputType = {
    id?: true
    clientId?: true
    assignmentId?: true
    notes?: true
    createdAt?: true
  }

  export type ProgressLogCountAggregateInputType = {
    id?: true
    clientId?: true
    assignmentId?: true
    exerciseResults?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ProgressLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLog to aggregate.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressLogs
    **/
    _count?: true | ProgressLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressLogMaxAggregateInputType
  }

  export type GetProgressLogAggregateType<T extends ProgressLogAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressLog[P]>
      : GetScalarType<T[P], AggregateProgressLog[P]>
  }




  export type ProgressLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithAggregationInput | ProgressLogOrderByWithAggregationInput[]
    by: ProgressLogScalarFieldEnum[] | ProgressLogScalarFieldEnum
    having?: ProgressLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressLogCountAggregateInputType | true
    _min?: ProgressLogMinAggregateInputType
    _max?: ProgressLogMaxAggregateInputType
  }

  export type ProgressLogGroupByOutputType = {
    id: string
    clientId: string
    assignmentId: string
    exerciseResults: JsonValue
    notes: string | null
    createdAt: Date
    _count: ProgressLogCountAggregateOutputType | null
    _min: ProgressLogMinAggregateOutputType | null
    _max: ProgressLogMaxAggregateOutputType | null
  }

  type GetProgressLogGroupByPayload<T extends ProgressLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressLogGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressLogGroupByOutputType[P]>
        }
      >
    >


  export type ProgressLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    assignmentId?: boolean
    exerciseResults?: boolean
    notes?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    assignmentId?: boolean
    exerciseResults?: boolean
    notes?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    assignmentId?: boolean
    exerciseResults?: boolean
    notes?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectScalar = {
    id?: boolean
    clientId?: boolean
    assignmentId?: boolean
    exerciseResults?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type ProgressLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "assignmentId" | "exerciseResults" | "notes" | "createdAt", ExtArgs["result"]["progressLog"]>
  export type ProgressLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type ProgressLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type ProgressLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }

  export type $ProgressLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressLog"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      assignment: Prisma.$AssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      assignmentId: string
      exerciseResults: Prisma.JsonValue
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["progressLog"]>
    composites: {}
  }

  type ProgressLogGetPayload<S extends boolean | null | undefined | ProgressLogDefaultArgs> = $Result.GetResult<Prisma.$ProgressLogPayload, S>

  type ProgressLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressLogCountAggregateInputType | true
    }

  export interface ProgressLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressLog'], meta: { name: 'ProgressLog' } }
    /**
     * Find zero or one ProgressLog that matches the filter.
     * @param {ProgressLogFindUniqueArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressLogFindUniqueArgs>(args: SelectSubset<T, ProgressLogFindUniqueArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressLogFindUniqueOrThrowArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindFirstArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressLogFindFirstArgs>(args?: SelectSubset<T, ProgressLogFindFirstArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindFirstOrThrowArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressLogs
     * const progressLogs = await prisma.progressLog.findMany()
     * 
     * // Get first 10 ProgressLogs
     * const progressLogs = await prisma.progressLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressLogFindManyArgs>(args?: SelectSubset<T, ProgressLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressLog.
     * @param {ProgressLogCreateArgs} args - Arguments to create a ProgressLog.
     * @example
     * // Create one ProgressLog
     * const ProgressLog = await prisma.progressLog.create({
     *   data: {
     *     // ... data to create a ProgressLog
     *   }
     * })
     * 
     */
    create<T extends ProgressLogCreateArgs>(args: SelectSubset<T, ProgressLogCreateArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressLogs.
     * @param {ProgressLogCreateManyArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLog = await prisma.progressLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressLogCreateManyArgs>(args?: SelectSubset<T, ProgressLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressLogs and returns the data saved in the database.
     * @param {ProgressLogCreateManyAndReturnArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLog = await prisma.progressLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressLogs and only return the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressLog.
     * @param {ProgressLogDeleteArgs} args - Arguments to delete one ProgressLog.
     * @example
     * // Delete one ProgressLog
     * const ProgressLog = await prisma.progressLog.delete({
     *   where: {
     *     // ... filter to delete one ProgressLog
     *   }
     * })
     * 
     */
    delete<T extends ProgressLogDeleteArgs>(args: SelectSubset<T, ProgressLogDeleteArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressLog.
     * @param {ProgressLogUpdateArgs} args - Arguments to update one ProgressLog.
     * @example
     * // Update one ProgressLog
     * const progressLog = await prisma.progressLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressLogUpdateArgs>(args: SelectSubset<T, ProgressLogUpdateArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressLogs.
     * @param {ProgressLogDeleteManyArgs} args - Arguments to filter ProgressLogs to delete.
     * @example
     * // Delete a few ProgressLogs
     * const { count } = await prisma.progressLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressLogDeleteManyArgs>(args?: SelectSubset<T, ProgressLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressLogs
     * const progressLog = await prisma.progressLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressLogUpdateManyArgs>(args: SelectSubset<T, ProgressLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs and returns the data updated in the database.
     * @param {ProgressLogUpdateManyAndReturnArgs} args - Arguments to update many ProgressLogs.
     * @example
     * // Update many ProgressLogs
     * const progressLog = await prisma.progressLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressLogs and only return the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressLog.
     * @param {ProgressLogUpsertArgs} args - Arguments to update or create a ProgressLog.
     * @example
     * // Update or create a ProgressLog
     * const progressLog = await prisma.progressLog.upsert({
     *   create: {
     *     // ... data to create a ProgressLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressLog we want to update
     *   }
     * })
     */
    upsert<T extends ProgressLogUpsertArgs>(args: SelectSubset<T, ProgressLogUpsertArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogCountArgs} args - Arguments to filter ProgressLogs to count.
     * @example
     * // Count the number of ProgressLogs
     * const count = await prisma.progressLog.count({
     *   where: {
     *     // ... the filter for the ProgressLogs we want to count
     *   }
     * })
    **/
    count<T extends ProgressLogCountArgs>(
      args?: Subset<T, ProgressLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressLogAggregateArgs>(args: Subset<T, ProgressLogAggregateArgs>): Prisma.PrismaPromise<GetProgressLogAggregateType<T>>

    /**
     * Group by ProgressLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgressLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressLogGroupByArgs['orderBy'] }
        : { orderBy?: ProgressLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgressLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressLog model
   */
  readonly fields: ProgressLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressLog model
   */
  interface ProgressLogFieldRefs {
    readonly id: FieldRef<"ProgressLog", 'String'>
    readonly clientId: FieldRef<"ProgressLog", 'String'>
    readonly assignmentId: FieldRef<"ProgressLog", 'String'>
    readonly exerciseResults: FieldRef<"ProgressLog", 'Json'>
    readonly notes: FieldRef<"ProgressLog", 'String'>
    readonly createdAt: FieldRef<"ProgressLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressLog findUnique
   */
  export type ProgressLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog findUniqueOrThrow
   */
  export type ProgressLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog findFirst
   */
  export type ProgressLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog findFirstOrThrow
   */
  export type ProgressLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog findMany
   */
  export type ProgressLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog create
   */
  export type ProgressLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressLog.
     */
    data: XOR<ProgressLogCreateInput, ProgressLogUncheckedCreateInput>
  }

  /**
   * ProgressLog createMany
   */
  export type ProgressLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogCreateManyInput | ProgressLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressLog createManyAndReturn
   */
  export type ProgressLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogCreateManyInput | ProgressLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLog update
   */
  export type ProgressLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressLog.
     */
    data: XOR<ProgressLogUpdateInput, ProgressLogUncheckedUpdateInput>
    /**
     * Choose, which ProgressLog to update.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog updateMany
   */
  export type ProgressLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
  }

  /**
   * ProgressLog updateManyAndReturn
   */
  export type ProgressLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLog upsert
   */
  export type ProgressLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressLog to update in case it exists.
     */
    where: ProgressLogWhereUniqueInput
    /**
     * In case the ProgressLog found by the `where` argument doesn't exist, create a new ProgressLog with this data.
     */
    create: XOR<ProgressLogCreateInput, ProgressLogUncheckedCreateInput>
    /**
     * In case the ProgressLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressLogUpdateInput, ProgressLogUncheckedUpdateInput>
  }

  /**
   * ProgressLog delete
   */
  export type ProgressLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter which ProgressLog to delete.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog deleteMany
   */
  export type ProgressLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLogs to delete
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to delete.
     */
    limit?: number
  }

  /**
   * ProgressLog without action
   */
  export type ProgressLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    sentAt: Date | null
    senderId: string | null
    receiverId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    sentAt: Date | null
    senderId: string | null
    receiverId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    sentAt: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    sentAt: Date
    senderId: string
    receiverId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    sentAt?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sentAt" | "senderId" | "receiverId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      sentAt: Date
      senderId: string
      receiverId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    coachId: string | null
    stripeSubscriptionId: string | null
    stripeInvoiceId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    coachId: string | null
    stripeSubscriptionId: string | null
    stripeInvoiceId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    clientId: number
    coachId: number
    stripeSubscriptionId: number
    stripeInvoiceId: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    clientId?: true
    coachId?: true
    stripeSubscriptionId?: true
    stripeInvoiceId?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    clientId?: true
    coachId?: true
    stripeSubscriptionId?: true
    stripeInvoiceId?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    clientId?: true
    coachId?: true
    stripeSubscriptionId?: true
    stripeInvoiceId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    clientId: string
    coachId: string
    stripeSubscriptionId: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    coachId?: boolean
    stripeSubscriptionId?: boolean
    stripeInvoiceId?: boolean
    status?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    coachId?: boolean
    stripeSubscriptionId?: boolean
    stripeInvoiceId?: boolean
    status?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    coachId?: boolean
    stripeSubscriptionId?: boolean
    stripeInvoiceId?: boolean
    status?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    clientId?: boolean
    coachId?: boolean
    stripeSubscriptionId?: boolean
    stripeInvoiceId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "coachId" | "stripeSubscriptionId" | "stripeInvoiceId" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    coach?: boolean | CoachDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      coach: Prisma.$CoachPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      coachId: string
      stripeSubscriptionId: string | null
      stripeInvoiceId: string
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coach<T extends CoachDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachDefaultArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly clientId: FieldRef<"Payment", 'String'>
    readonly coachId: FieldRef<"Payment", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Payment", 'String'>
    readonly stripeInvoiceId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    profileInfo: 'profileInfo',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CoachScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    subscriptionPlan: 'subscriptionPlan',
    subscriptionId: 'subscriptionId'
  };

  export type CoachScalarFieldEnum = (typeof CoachScalarFieldEnum)[keyof typeof CoachScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    coachId: 'coachId',
    onboardingData: 'onboardingData'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const GlobalExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    videoUrl: 'videoUrl',
    instructionsText: 'instructionsText',
    defaultSets: 'defaultSets',
    defaultReps: 'defaultReps',
    defaultWeight: 'defaultWeight',
    weightType: 'weightType',
    weightMeasurementType: 'weightMeasurementType',
    createdById: 'createdById'
  };

  export type GlobalExerciseScalarFieldEnum = (typeof GlobalExerciseScalarFieldEnum)[keyof typeof GlobalExerciseScalarFieldEnum]


  export const CoachExerciseScalarFieldEnum: {
    id: 'id',
    coachId: 'coachId',
    baseExerciseId: 'baseExerciseId',
    name: 'name',
    videoUrl: 'videoUrl',
    instructionsText: 'instructionsText',
    defaultSets: 'defaultSets',
    defaultReps: 'defaultReps',
    defaultWeight: 'defaultWeight',
    weightType: 'weightType',
    weightMeasurementType: 'weightMeasurementType'
  };

  export type CoachExerciseScalarFieldEnum = (typeof CoachExerciseScalarFieldEnum)[keyof typeof CoachExerciseScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    coachId: 'coachId',
    title: 'title',
    description: 'description',
    exercises: 'exercises',
    createdAt: 'createdAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    clientId: 'clientId',
    scheduledDate: 'scheduledDate',
    status: 'status'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const ProgressLogScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    assignmentId: 'assignmentId',
    exerciseResults: 'exerciseResults',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ProgressLogScalarFieldEnum = (typeof ProgressLogScalarFieldEnum)[keyof typeof ProgressLogScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sentAt: 'sentAt',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    coachId: 'coachId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    stripeInvoiceId: 'stripeInvoiceId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'WeightType'
   */
  export type EnumWeightTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeightType'>
    


  /**
   * Reference to a field of type 'WeightType[]'
   */
  export type ListEnumWeightTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeightType[]'>
    


  /**
   * Reference to a field of type 'WeightMeasurementType'
   */
  export type EnumWeightMeasurementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeightMeasurementType'>
    


  /**
   * Reference to a field of type 'WeightMeasurementType[]'
   */
  export type ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeightMeasurementType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileInfo?: JsonFilter<"User">
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    coach?: XOR<CoachNullableScalarRelationFilter, CoachWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    createdExercises?: GlobalExerciseListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    profileInfo?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    coach?: CoachOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    createdExercises?: GlobalExerciseOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileInfo?: JsonFilter<"User">
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    coach?: XOR<CoachNullableScalarRelationFilter, CoachWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    createdExercises?: GlobalExerciseListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    profileInfo?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profileInfo?: JsonWithAggregatesFilter<"User">
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CoachWhereInput = {
    AND?: CoachWhereInput | CoachWhereInput[]
    OR?: CoachWhereInput[]
    NOT?: CoachWhereInput | CoachWhereInput[]
    id?: StringFilter<"Coach"> | string
    userId?: StringFilter<"Coach"> | string
    businessName?: StringNullableFilter<"Coach"> | string | null
    subscriptionPlan?: StringNullableFilter<"Coach"> | string | null
    subscriptionId?: StringNullableFilter<"Coach"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: CoachExerciseListRelationFilter
    workouts?: WorkoutListRelationFilter
    clients?: ClientListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type CoachOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrderInput | SortOrder
    subscriptionPlan?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    exercises?: CoachExerciseOrderByRelationAggregateInput
    workouts?: WorkoutOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type CoachWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CoachWhereInput | CoachWhereInput[]
    OR?: CoachWhereInput[]
    NOT?: CoachWhereInput | CoachWhereInput[]
    businessName?: StringNullableFilter<"Coach"> | string | null
    subscriptionPlan?: StringNullableFilter<"Coach"> | string | null
    subscriptionId?: StringNullableFilter<"Coach"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: CoachExerciseListRelationFilter
    workouts?: WorkoutListRelationFilter
    clients?: ClientListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "userId">

  export type CoachOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrderInput | SortOrder
    subscriptionPlan?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    _count?: CoachCountOrderByAggregateInput
    _max?: CoachMaxOrderByAggregateInput
    _min?: CoachMinOrderByAggregateInput
  }

  export type CoachScalarWhereWithAggregatesInput = {
    AND?: CoachScalarWhereWithAggregatesInput | CoachScalarWhereWithAggregatesInput[]
    OR?: CoachScalarWhereWithAggregatesInput[]
    NOT?: CoachScalarWhereWithAggregatesInput | CoachScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coach"> | string
    userId?: StringWithAggregatesFilter<"Coach"> | string
    businessName?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    subscriptionPlan?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"Coach"> | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    userId?: StringFilter<"Client"> | string
    coachId?: StringFilter<"Client"> | string
    onboardingData?: JsonFilter<"Client">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    assignments?: AssignmentListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    coachId?: SortOrder
    onboardingData?: SortOrder
    user?: UserOrderByWithRelationInput
    coach?: CoachOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
    progressLogs?: ProgressLogOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    coachId?: StringFilter<"Client"> | string
    onboardingData?: JsonFilter<"Client">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    assignments?: AssignmentListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "userId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    coachId?: SortOrder
    onboardingData?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    userId?: StringWithAggregatesFilter<"Client"> | string
    coachId?: StringWithAggregatesFilter<"Client"> | string
    onboardingData?: JsonWithAggregatesFilter<"Client">
  }

  export type GlobalExerciseWhereInput = {
    AND?: GlobalExerciseWhereInput | GlobalExerciseWhereInput[]
    OR?: GlobalExerciseWhereInput[]
    NOT?: GlobalExerciseWhereInput | GlobalExerciseWhereInput[]
    id?: StringFilter<"GlobalExercise"> | string
    name?: StringFilter<"GlobalExercise"> | string
    videoUrl?: StringFilter<"GlobalExercise"> | string
    instructionsText?: StringFilter<"GlobalExercise"> | string
    defaultSets?: IntFilter<"GlobalExercise"> | number
    defaultReps?: IntFilter<"GlobalExercise"> | number
    defaultWeight?: FloatFilter<"GlobalExercise"> | number
    weightType?: EnumWeightTypeFilter<"GlobalExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFilter<"GlobalExercise"> | $Enums.WeightMeasurementType
    createdById?: StringFilter<"GlobalExercise"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    coachExercises?: CoachExerciseListRelationFilter
  }

  export type GlobalExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    coachExercises?: CoachExerciseOrderByRelationAggregateInput
  }

  export type GlobalExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalExerciseWhereInput | GlobalExerciseWhereInput[]
    OR?: GlobalExerciseWhereInput[]
    NOT?: GlobalExerciseWhereInput | GlobalExerciseWhereInput[]
    name?: StringFilter<"GlobalExercise"> | string
    videoUrl?: StringFilter<"GlobalExercise"> | string
    instructionsText?: StringFilter<"GlobalExercise"> | string
    defaultSets?: IntFilter<"GlobalExercise"> | number
    defaultReps?: IntFilter<"GlobalExercise"> | number
    defaultWeight?: FloatFilter<"GlobalExercise"> | number
    weightType?: EnumWeightTypeFilter<"GlobalExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFilter<"GlobalExercise"> | $Enums.WeightMeasurementType
    createdById?: StringFilter<"GlobalExercise"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    coachExercises?: CoachExerciseListRelationFilter
  }, "id">

  export type GlobalExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    createdById?: SortOrder
    _count?: GlobalExerciseCountOrderByAggregateInput
    _avg?: GlobalExerciseAvgOrderByAggregateInput
    _max?: GlobalExerciseMaxOrderByAggregateInput
    _min?: GlobalExerciseMinOrderByAggregateInput
    _sum?: GlobalExerciseSumOrderByAggregateInput
  }

  export type GlobalExerciseScalarWhereWithAggregatesInput = {
    AND?: GlobalExerciseScalarWhereWithAggregatesInput | GlobalExerciseScalarWhereWithAggregatesInput[]
    OR?: GlobalExerciseScalarWhereWithAggregatesInput[]
    NOT?: GlobalExerciseScalarWhereWithAggregatesInput | GlobalExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalExercise"> | string
    name?: StringWithAggregatesFilter<"GlobalExercise"> | string
    videoUrl?: StringWithAggregatesFilter<"GlobalExercise"> | string
    instructionsText?: StringWithAggregatesFilter<"GlobalExercise"> | string
    defaultSets?: IntWithAggregatesFilter<"GlobalExercise"> | number
    defaultReps?: IntWithAggregatesFilter<"GlobalExercise"> | number
    defaultWeight?: FloatWithAggregatesFilter<"GlobalExercise"> | number
    weightType?: EnumWeightTypeWithAggregatesFilter<"GlobalExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeWithAggregatesFilter<"GlobalExercise"> | $Enums.WeightMeasurementType
    createdById?: StringWithAggregatesFilter<"GlobalExercise"> | string
  }

  export type CoachExerciseWhereInput = {
    AND?: CoachExerciseWhereInput | CoachExerciseWhereInput[]
    OR?: CoachExerciseWhereInput[]
    NOT?: CoachExerciseWhereInput | CoachExerciseWhereInput[]
    id?: StringFilter<"CoachExercise"> | string
    coachId?: StringFilter<"CoachExercise"> | string
    baseExerciseId?: StringFilter<"CoachExercise"> | string
    name?: StringFilter<"CoachExercise"> | string
    videoUrl?: StringFilter<"CoachExercise"> | string
    instructionsText?: StringFilter<"CoachExercise"> | string
    defaultSets?: IntFilter<"CoachExercise"> | number
    defaultReps?: IntFilter<"CoachExercise"> | number
    defaultWeight?: FloatFilter<"CoachExercise"> | number
    weightType?: EnumWeightTypeFilter<"CoachExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFilter<"CoachExercise"> | $Enums.WeightMeasurementType
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    baseExercise?: XOR<GlobalExerciseScalarRelationFilter, GlobalExerciseWhereInput>
  }

  export type CoachExerciseOrderByWithRelationInput = {
    id?: SortOrder
    coachId?: SortOrder
    baseExerciseId?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    coach?: CoachOrderByWithRelationInput
    baseExercise?: GlobalExerciseOrderByWithRelationInput
  }

  export type CoachExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoachExerciseWhereInput | CoachExerciseWhereInput[]
    OR?: CoachExerciseWhereInput[]
    NOT?: CoachExerciseWhereInput | CoachExerciseWhereInput[]
    coachId?: StringFilter<"CoachExercise"> | string
    baseExerciseId?: StringFilter<"CoachExercise"> | string
    name?: StringFilter<"CoachExercise"> | string
    videoUrl?: StringFilter<"CoachExercise"> | string
    instructionsText?: StringFilter<"CoachExercise"> | string
    defaultSets?: IntFilter<"CoachExercise"> | number
    defaultReps?: IntFilter<"CoachExercise"> | number
    defaultWeight?: FloatFilter<"CoachExercise"> | number
    weightType?: EnumWeightTypeFilter<"CoachExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFilter<"CoachExercise"> | $Enums.WeightMeasurementType
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    baseExercise?: XOR<GlobalExerciseScalarRelationFilter, GlobalExerciseWhereInput>
  }, "id">

  export type CoachExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    coachId?: SortOrder
    baseExerciseId?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    _count?: CoachExerciseCountOrderByAggregateInput
    _avg?: CoachExerciseAvgOrderByAggregateInput
    _max?: CoachExerciseMaxOrderByAggregateInput
    _min?: CoachExerciseMinOrderByAggregateInput
    _sum?: CoachExerciseSumOrderByAggregateInput
  }

  export type CoachExerciseScalarWhereWithAggregatesInput = {
    AND?: CoachExerciseScalarWhereWithAggregatesInput | CoachExerciseScalarWhereWithAggregatesInput[]
    OR?: CoachExerciseScalarWhereWithAggregatesInput[]
    NOT?: CoachExerciseScalarWhereWithAggregatesInput | CoachExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachExercise"> | string
    coachId?: StringWithAggregatesFilter<"CoachExercise"> | string
    baseExerciseId?: StringWithAggregatesFilter<"CoachExercise"> | string
    name?: StringWithAggregatesFilter<"CoachExercise"> | string
    videoUrl?: StringWithAggregatesFilter<"CoachExercise"> | string
    instructionsText?: StringWithAggregatesFilter<"CoachExercise"> | string
    defaultSets?: IntWithAggregatesFilter<"CoachExercise"> | number
    defaultReps?: IntWithAggregatesFilter<"CoachExercise"> | number
    defaultWeight?: FloatWithAggregatesFilter<"CoachExercise"> | number
    weightType?: EnumWeightTypeWithAggregatesFilter<"CoachExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeWithAggregatesFilter<"CoachExercise"> | $Enums.WeightMeasurementType
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    coachId?: StringFilter<"Workout"> | string
    title?: StringFilter<"Workout"> | string
    description?: StringFilter<"Workout"> | string
    exercises?: JsonFilter<"Workout">
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    assignments?: AssignmentListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    coachId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exercises?: SortOrder
    createdAt?: SortOrder
    coach?: CoachOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    coachId?: StringFilter<"Workout"> | string
    title?: StringFilter<"Workout"> | string
    description?: StringFilter<"Workout"> | string
    exercises?: JsonFilter<"Workout">
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
    assignments?: AssignmentListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    coachId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exercises?: SortOrder
    createdAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    coachId?: StringWithAggregatesFilter<"Workout"> | string
    title?: StringWithAggregatesFilter<"Workout"> | string
    description?: StringWithAggregatesFilter<"Workout"> | string
    exercises?: JsonWithAggregatesFilter<"Workout">
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    workoutId?: StringFilter<"Assignment"> | string
    clientId?: StringFilter<"Assignment"> | string
    scheduledDate?: DateTimeFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    progressLogs?: ProgressLogListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    progressLogs?: ProgressLogOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    workoutId?: StringFilter<"Assignment"> | string
    clientId?: StringFilter<"Assignment"> | string
    scheduledDate?: DateTimeFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    progressLogs?: ProgressLogListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    workoutId?: StringWithAggregatesFilter<"Assignment"> | string
    clientId?: StringWithAggregatesFilter<"Assignment"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
  }

  export type ProgressLogWhereInput = {
    AND?: ProgressLogWhereInput | ProgressLogWhereInput[]
    OR?: ProgressLogWhereInput[]
    NOT?: ProgressLogWhereInput | ProgressLogWhereInput[]
    id?: StringFilter<"ProgressLog"> | string
    clientId?: StringFilter<"ProgressLog"> | string
    assignmentId?: StringFilter<"ProgressLog"> | string
    exerciseResults?: JsonFilter<"ProgressLog">
    notes?: StringNullableFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }

  export type ProgressLogOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    assignmentId?: SortOrder
    exerciseResults?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    assignment?: AssignmentOrderByWithRelationInput
  }

  export type ProgressLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressLogWhereInput | ProgressLogWhereInput[]
    OR?: ProgressLogWhereInput[]
    NOT?: ProgressLogWhereInput | ProgressLogWhereInput[]
    clientId?: StringFilter<"ProgressLog"> | string
    assignmentId?: StringFilter<"ProgressLog"> | string
    exerciseResults?: JsonFilter<"ProgressLog">
    notes?: StringNullableFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }, "id">

  export type ProgressLogOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    assignmentId?: SortOrder
    exerciseResults?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProgressLogCountOrderByAggregateInput
    _max?: ProgressLogMaxOrderByAggregateInput
    _min?: ProgressLogMinOrderByAggregateInput
  }

  export type ProgressLogScalarWhereWithAggregatesInput = {
    AND?: ProgressLogScalarWhereWithAggregatesInput | ProgressLogScalarWhereWithAggregatesInput[]
    OR?: ProgressLogScalarWhereWithAggregatesInput[]
    NOT?: ProgressLogScalarWhereWithAggregatesInput | ProgressLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressLog"> | string
    clientId?: StringWithAggregatesFilter<"ProgressLog"> | string
    assignmentId?: StringWithAggregatesFilter<"ProgressLog"> | string
    exerciseResults?: JsonWithAggregatesFilter<"ProgressLog">
    notes?: StringNullableWithAggregatesFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProgressLog"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    clientId?: StringFilter<"Payment"> | string
    coachId?: StringFilter<"Payment"> | string
    stripeSubscriptionId?: StringNullableFilter<"Payment"> | string | null
    stripeInvoiceId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    coachId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    stripeInvoiceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    coach?: CoachOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    clientId?: StringFilter<"Payment"> | string
    coachId?: StringFilter<"Payment"> | string
    stripeSubscriptionId?: StringNullableFilter<"Payment"> | string | null
    stripeInvoiceId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    coach?: XOR<CoachScalarRelationFilter, CoachWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    coachId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    stripeInvoiceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    clientId?: StringWithAggregatesFilter<"Payment"> | string
    coachId?: StringWithAggregatesFilter<"Payment"> | string
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    stripeInvoiceId?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachCreateNestedOneWithoutUserInput
    client?: ClientCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseUncheckedCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUpdateOneWithoutUserNestedInput
    client?: ClientUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUncheckedUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoachCreateInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    user: UserCreateNestedOneWithoutCoachInput
    exercises?: CoachExerciseCreateNestedManyWithoutCoachInput
    workouts?: WorkoutCreateNestedManyWithoutCoachInput
    clients?: ClientCreateNestedManyWithoutCoachInput
    payments?: PaymentCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateInput = {
    id?: string
    userId: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    exercises?: CoachExerciseUncheckedCreateNestedManyWithoutCoachInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutCoachInput
    clients?: ClientUncheckedCreateNestedManyWithoutCoachInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCoachNestedInput
    exercises?: CoachExerciseUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUpdateManyWithoutCoachNestedInput
    clients?: ClientUpdateManyWithoutCoachNestedInput
    payments?: PaymentUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: CoachExerciseUncheckedUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutCoachNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCoachNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CoachCreateManyInput = {
    id?: string
    userId: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
  }

  export type CoachUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoachUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateInput = {
    id?: string
    onboardingData: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutClientInput
    coach: CoachCreateNestedOneWithoutClientsInput
    assignments?: AssignmentCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogCreateNestedManyWithoutClientInput
    payments?: PaymentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    userId: string
    coachId: string
    onboardingData: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutClientInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutClientNestedInput
    coach?: CoachUpdateOneRequiredWithoutClientsNestedInput
    assignments?: AssignmentUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutClientNestedInput
    payments?: PaymentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutClientNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    userId: string
    coachId: string
    onboardingData: JsonNullValueInput | InputJsonValue
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
  }

  export type GlobalExerciseCreateInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    createdBy: UserCreateNestedOneWithoutCreatedExercisesInput
    coachExercises?: CoachExerciseCreateNestedManyWithoutBaseExerciseInput
  }

  export type GlobalExerciseUncheckedCreateInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    createdById: string
    coachExercises?: CoachExerciseUncheckedCreateNestedManyWithoutBaseExerciseInput
  }

  export type GlobalExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    createdBy?: UserUpdateOneRequiredWithoutCreatedExercisesNestedInput
    coachExercises?: CoachExerciseUpdateManyWithoutBaseExerciseNestedInput
  }

  export type GlobalExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    createdById?: StringFieldUpdateOperationsInput | string
    coachExercises?: CoachExerciseUncheckedUpdateManyWithoutBaseExerciseNestedInput
  }

  export type GlobalExerciseCreateManyInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    createdById: string
  }

  export type GlobalExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type GlobalExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type CoachExerciseCreateInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    coach: CoachCreateNestedOneWithoutExercisesInput
    baseExercise: GlobalExerciseCreateNestedOneWithoutCoachExercisesInput
  }

  export type CoachExerciseUncheckedCreateInput = {
    id?: string
    coachId: string
    baseExerciseId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type CoachExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    coach?: CoachUpdateOneRequiredWithoutExercisesNestedInput
    baseExercise?: GlobalExerciseUpdateOneRequiredWithoutCoachExercisesNestedInput
  }

  export type CoachExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    baseExerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type CoachExerciseCreateManyInput = {
    id?: string
    coachId: string
    baseExerciseId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type CoachExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type CoachExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    baseExerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type WorkoutCreateInput = {
    id?: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    coach: CoachCreateNestedOneWithoutWorkoutsInput
    assignments?: AssignmentCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    coachId: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachUpdateOneRequiredWithoutWorkoutsNestedInput
    assignments?: AssignmentUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: string
    coachId: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    workout: WorkoutCreateNestedOneWithoutAssignmentsInput
    client: ClientCreateNestedOneWithoutAssignmentsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    workoutId: string
    clientId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    workout?: WorkoutUpdateOneRequiredWithoutAssignmentsNestedInput
    client?: ClientUpdateOneRequiredWithoutAssignmentsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    workoutId: string
    clientId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type ProgressLogCreateInput = {
    id?: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutProgressLogsInput
    assignment: AssignmentCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateInput = {
    id?: string
    clientId: string
    assignmentId: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ProgressLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProgressLogsNestedInput
    assignment?: AssignmentUpdateOneRequiredWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogCreateManyInput = {
    id?: string
    clientId: string
    assignmentId: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ProgressLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    sentAt?: Date | string
    senderId: string
    receiverId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    sentAt?: Date | string
    senderId: string
    receiverId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutPaymentsInput
    coach: CoachCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    clientId: string
    coachId: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutPaymentsNestedInput
    coach?: CoachUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    clientId: string
    coachId: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CoachNullableScalarRelationFilter = {
    is?: CoachWhereInput | null
    isNot?: CoachWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type GlobalExerciseListRelationFilter = {
    every?: GlobalExerciseWhereInput
    some?: GlobalExerciseWhereInput
    none?: GlobalExerciseWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GlobalExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    profileInfo?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CoachExerciseListRelationFilter = {
    every?: CoachExerciseWhereInput
    some?: CoachExerciseWhereInput
    none?: CoachExerciseWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type CoachExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionId?: SortOrder
  }

  export type CoachMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionId?: SortOrder
  }

  export type CoachMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionId?: SortOrder
  }

  export type CoachScalarRelationFilter = {
    is?: CoachWhereInput
    isNot?: CoachWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type ProgressLogListRelationFilter = {
    every?: ProgressLogWhereInput
    some?: ProgressLogWhereInput
    none?: ProgressLogWhereInput
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coachId?: SortOrder
    onboardingData?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coachId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coachId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumWeightTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightType | EnumWeightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightTypeFilter<$PrismaModel> | $Enums.WeightType
  }

  export type EnumWeightMeasurementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightMeasurementType | EnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightMeasurementTypeFilter<$PrismaModel> | $Enums.WeightMeasurementType
  }

  export type GlobalExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    createdById?: SortOrder
  }

  export type GlobalExerciseAvgOrderByAggregateInput = {
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
  }

  export type GlobalExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    createdById?: SortOrder
  }

  export type GlobalExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
    createdById?: SortOrder
  }

  export type GlobalExerciseSumOrderByAggregateInput = {
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumWeightTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightType | EnumWeightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightTypeWithAggregatesFilter<$PrismaModel> | $Enums.WeightType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeightTypeFilter<$PrismaModel>
    _max?: NestedEnumWeightTypeFilter<$PrismaModel>
  }

  export type EnumWeightMeasurementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightMeasurementType | EnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightMeasurementTypeWithAggregatesFilter<$PrismaModel> | $Enums.WeightMeasurementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeightMeasurementTypeFilter<$PrismaModel>
    _max?: NestedEnumWeightMeasurementTypeFilter<$PrismaModel>
  }

  export type GlobalExerciseScalarRelationFilter = {
    is?: GlobalExerciseWhereInput
    isNot?: GlobalExerciseWhereInput
  }

  export type CoachExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    baseExerciseId?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
  }

  export type CoachExerciseAvgOrderByAggregateInput = {
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
  }

  export type CoachExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    baseExerciseId?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
  }

  export type CoachExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    baseExerciseId?: SortOrder
    name?: SortOrder
    videoUrl?: SortOrder
    instructionsText?: SortOrder
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
    weightType?: SortOrder
    weightMeasurementType?: SortOrder
  }

  export type CoachExerciseSumOrderByAggregateInput = {
    defaultSets?: SortOrder
    defaultReps?: SortOrder
    defaultWeight?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    exercises?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type ProgressLogCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    assignmentId?: SortOrder
    exerciseResults?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressLogMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    assignmentId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressLogMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    assignmentId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    coachId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripeInvoiceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    coachId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripeInvoiceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    coachId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripeInvoiceId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CoachCreateNestedOneWithoutUserInput = {
    create?: XOR<CoachCreateWithoutUserInput, CoachUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput
    connect?: CoachWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    connect?: ClientWhereUniqueInput
  }

  export type GlobalExerciseCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<GlobalExerciseCreateWithoutCreatedByInput, GlobalExerciseUncheckedCreateWithoutCreatedByInput> | GlobalExerciseCreateWithoutCreatedByInput[] | GlobalExerciseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GlobalExerciseCreateOrConnectWithoutCreatedByInput | GlobalExerciseCreateOrConnectWithoutCreatedByInput[]
    createMany?: GlobalExerciseCreateManyCreatedByInputEnvelope
    connect?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CoachUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CoachCreateWithoutUserInput, CoachUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput
    connect?: CoachWhereUniqueInput
  }

  export type ClientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    connect?: ClientWhereUniqueInput
  }

  export type GlobalExerciseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<GlobalExerciseCreateWithoutCreatedByInput, GlobalExerciseUncheckedCreateWithoutCreatedByInput> | GlobalExerciseCreateWithoutCreatedByInput[] | GlobalExerciseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GlobalExerciseCreateOrConnectWithoutCreatedByInput | GlobalExerciseCreateOrConnectWithoutCreatedByInput[]
    createMany?: GlobalExerciseCreateManyCreatedByInputEnvelope
    connect?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CoachUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoachCreateWithoutUserInput, CoachUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput
    upsert?: CoachUpsertWithoutUserInput
    disconnect?: CoachWhereInput | boolean
    delete?: CoachWhereInput | boolean
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutUserInput, CoachUpdateWithoutUserInput>, CoachUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    upsert?: ClientUpsertWithoutUserInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUserInput, ClientUpdateWithoutUserInput>, ClientUncheckedUpdateWithoutUserInput>
  }

  export type GlobalExerciseUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<GlobalExerciseCreateWithoutCreatedByInput, GlobalExerciseUncheckedCreateWithoutCreatedByInput> | GlobalExerciseCreateWithoutCreatedByInput[] | GlobalExerciseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GlobalExerciseCreateOrConnectWithoutCreatedByInput | GlobalExerciseCreateOrConnectWithoutCreatedByInput[]
    upsert?: GlobalExerciseUpsertWithWhereUniqueWithoutCreatedByInput | GlobalExerciseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: GlobalExerciseCreateManyCreatedByInputEnvelope
    set?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    disconnect?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    delete?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    connect?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    update?: GlobalExerciseUpdateWithWhereUniqueWithoutCreatedByInput | GlobalExerciseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: GlobalExerciseUpdateManyWithWhereWithoutCreatedByInput | GlobalExerciseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: GlobalExerciseScalarWhereInput | GlobalExerciseScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CoachUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoachCreateWithoutUserInput, CoachUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachCreateOrConnectWithoutUserInput
    upsert?: CoachUpsertWithoutUserInput
    disconnect?: CoachWhereInput | boolean
    delete?: CoachWhereInput | boolean
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutUserInput, CoachUpdateWithoutUserInput>, CoachUncheckedUpdateWithoutUserInput>
  }

  export type ClientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput
    upsert?: ClientUpsertWithoutUserInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUserInput, ClientUpdateWithoutUserInput>, ClientUncheckedUpdateWithoutUserInput>
  }

  export type GlobalExerciseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<GlobalExerciseCreateWithoutCreatedByInput, GlobalExerciseUncheckedCreateWithoutCreatedByInput> | GlobalExerciseCreateWithoutCreatedByInput[] | GlobalExerciseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GlobalExerciseCreateOrConnectWithoutCreatedByInput | GlobalExerciseCreateOrConnectWithoutCreatedByInput[]
    upsert?: GlobalExerciseUpsertWithWhereUniqueWithoutCreatedByInput | GlobalExerciseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: GlobalExerciseCreateManyCreatedByInputEnvelope
    set?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    disconnect?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    delete?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    connect?: GlobalExerciseWhereUniqueInput | GlobalExerciseWhereUniqueInput[]
    update?: GlobalExerciseUpdateWithWhereUniqueWithoutCreatedByInput | GlobalExerciseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: GlobalExerciseUpdateManyWithWhereWithoutCreatedByInput | GlobalExerciseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: GlobalExerciseScalarWhereInput | GlobalExerciseScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoachInput = {
    create?: XOR<UserCreateWithoutCoachInput, UserUncheckedCreateWithoutCoachInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput
    connect?: UserWhereUniqueInput
  }

  export type CoachExerciseCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachExerciseCreateWithoutCoachInput, CoachExerciseUncheckedCreateWithoutCoachInput> | CoachExerciseCreateWithoutCoachInput[] | CoachExerciseUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutCoachInput | CoachExerciseCreateOrConnectWithoutCoachInput[]
    createMany?: CoachExerciseCreateManyCoachInputEnvelope
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutCoachInput = {
    create?: XOR<WorkoutCreateWithoutCoachInput, WorkoutUncheckedCreateWithoutCoachInput> | WorkoutCreateWithoutCoachInput[] | WorkoutUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutCoachInput | WorkoutCreateOrConnectWithoutCoachInput[]
    createMany?: WorkoutCreateManyCoachInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutCoachInput = {
    create?: XOR<ClientCreateWithoutCoachInput, ClientUncheckedCreateWithoutCoachInput> | ClientCreateWithoutCoachInput[] | ClientUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCoachInput | ClientCreateOrConnectWithoutCoachInput[]
    createMany?: ClientCreateManyCoachInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCoachInput = {
    create?: XOR<PaymentCreateWithoutCoachInput, PaymentUncheckedCreateWithoutCoachInput> | PaymentCreateWithoutCoachInput[] | PaymentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCoachInput | PaymentCreateOrConnectWithoutCoachInput[]
    createMany?: PaymentCreateManyCoachInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CoachExerciseUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachExerciseCreateWithoutCoachInput, CoachExerciseUncheckedCreateWithoutCoachInput> | CoachExerciseCreateWithoutCoachInput[] | CoachExerciseUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutCoachInput | CoachExerciseCreateOrConnectWithoutCoachInput[]
    createMany?: CoachExerciseCreateManyCoachInputEnvelope
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<WorkoutCreateWithoutCoachInput, WorkoutUncheckedCreateWithoutCoachInput> | WorkoutCreateWithoutCoachInput[] | WorkoutUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutCoachInput | WorkoutCreateOrConnectWithoutCoachInput[]
    createMany?: WorkoutCreateManyCoachInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<ClientCreateWithoutCoachInput, ClientUncheckedCreateWithoutCoachInput> | ClientCreateWithoutCoachInput[] | ClientUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCoachInput | ClientCreateOrConnectWithoutCoachInput[]
    createMany?: ClientCreateManyCoachInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<PaymentCreateWithoutCoachInput, PaymentUncheckedCreateWithoutCoachInput> | PaymentCreateWithoutCoachInput[] | PaymentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCoachInput | PaymentCreateOrConnectWithoutCoachInput[]
    createMany?: PaymentCreateManyCoachInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCoachNestedInput = {
    create?: XOR<UserCreateWithoutCoachInput, UserUncheckedCreateWithoutCoachInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput
    upsert?: UserUpsertWithoutCoachInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachInput, UserUpdateWithoutCoachInput>, UserUncheckedUpdateWithoutCoachInput>
  }

  export type CoachExerciseUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachExerciseCreateWithoutCoachInput, CoachExerciseUncheckedCreateWithoutCoachInput> | CoachExerciseCreateWithoutCoachInput[] | CoachExerciseUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutCoachInput | CoachExerciseCreateOrConnectWithoutCoachInput[]
    upsert?: CoachExerciseUpsertWithWhereUniqueWithoutCoachInput | CoachExerciseUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachExerciseCreateManyCoachInputEnvelope
    set?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    disconnect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    delete?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    update?: CoachExerciseUpdateWithWhereUniqueWithoutCoachInput | CoachExerciseUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachExerciseUpdateManyWithWhereWithoutCoachInput | CoachExerciseUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachExerciseScalarWhereInput | CoachExerciseScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutCoachNestedInput = {
    create?: XOR<WorkoutCreateWithoutCoachInput, WorkoutUncheckedCreateWithoutCoachInput> | WorkoutCreateWithoutCoachInput[] | WorkoutUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutCoachInput | WorkoutCreateOrConnectWithoutCoachInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutCoachInput | WorkoutUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: WorkoutCreateManyCoachInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutCoachInput | WorkoutUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutCoachInput | WorkoutUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutCoachNestedInput = {
    create?: XOR<ClientCreateWithoutCoachInput, ClientUncheckedCreateWithoutCoachInput> | ClientCreateWithoutCoachInput[] | ClientUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCoachInput | ClientCreateOrConnectWithoutCoachInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCoachInput | ClientUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: ClientCreateManyCoachInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCoachInput | ClientUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCoachInput | ClientUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCoachNestedInput = {
    create?: XOR<PaymentCreateWithoutCoachInput, PaymentUncheckedCreateWithoutCoachInput> | PaymentCreateWithoutCoachInput[] | PaymentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCoachInput | PaymentCreateOrConnectWithoutCoachInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCoachInput | PaymentUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: PaymentCreateManyCoachInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCoachInput | PaymentUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCoachInput | PaymentUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CoachExerciseUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachExerciseCreateWithoutCoachInput, CoachExerciseUncheckedCreateWithoutCoachInput> | CoachExerciseCreateWithoutCoachInput[] | CoachExerciseUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutCoachInput | CoachExerciseCreateOrConnectWithoutCoachInput[]
    upsert?: CoachExerciseUpsertWithWhereUniqueWithoutCoachInput | CoachExerciseUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachExerciseCreateManyCoachInputEnvelope
    set?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    disconnect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    delete?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    update?: CoachExerciseUpdateWithWhereUniqueWithoutCoachInput | CoachExerciseUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachExerciseUpdateManyWithWhereWithoutCoachInput | CoachExerciseUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachExerciseScalarWhereInput | CoachExerciseScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<WorkoutCreateWithoutCoachInput, WorkoutUncheckedCreateWithoutCoachInput> | WorkoutCreateWithoutCoachInput[] | WorkoutUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutCoachInput | WorkoutCreateOrConnectWithoutCoachInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutCoachInput | WorkoutUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: WorkoutCreateManyCoachInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutCoachInput | WorkoutUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutCoachInput | WorkoutUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<ClientCreateWithoutCoachInput, ClientUncheckedCreateWithoutCoachInput> | ClientCreateWithoutCoachInput[] | ClientUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCoachInput | ClientCreateOrConnectWithoutCoachInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCoachInput | ClientUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: ClientCreateManyCoachInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCoachInput | ClientUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCoachInput | ClientUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<PaymentCreateWithoutCoachInput, PaymentUncheckedCreateWithoutCoachInput> | PaymentCreateWithoutCoachInput[] | PaymentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCoachInput | PaymentCreateOrConnectWithoutCoachInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCoachInput | PaymentUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: PaymentCreateManyCoachInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCoachInput | PaymentUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCoachInput | PaymentUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    connect?: UserWhereUniqueInput
  }

  export type CoachCreateNestedOneWithoutClientsInput = {
    create?: XOR<CoachCreateWithoutClientsInput, CoachUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CoachCreateOrConnectWithoutClientsInput
    connect?: CoachWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutClientInput = {
    create?: XOR<AssignmentCreateWithoutClientInput, AssignmentUncheckedCreateWithoutClientInput> | AssignmentCreateWithoutClientInput[] | AssignmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClientInput | AssignmentCreateOrConnectWithoutClientInput[]
    createMany?: AssignmentCreateManyClientInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ProgressLogCreateNestedManyWithoutClientInput = {
    create?: XOR<ProgressLogCreateWithoutClientInput, ProgressLogUncheckedCreateWithoutClientInput> | ProgressLogCreateWithoutClientInput[] | ProgressLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutClientInput | ProgressLogCreateOrConnectWithoutClientInput[]
    createMany?: ProgressLogCreateManyClientInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutClientInput = {
    create?: XOR<PaymentCreateWithoutClientInput, PaymentUncheckedCreateWithoutClientInput> | PaymentCreateWithoutClientInput[] | PaymentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClientInput | PaymentCreateOrConnectWithoutClientInput[]
    createMany?: PaymentCreateManyClientInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AssignmentCreateWithoutClientInput, AssignmentUncheckedCreateWithoutClientInput> | AssignmentCreateWithoutClientInput[] | AssignmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClientInput | AssignmentCreateOrConnectWithoutClientInput[]
    createMany?: AssignmentCreateManyClientInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProgressLogCreateWithoutClientInput, ProgressLogUncheckedCreateWithoutClientInput> | ProgressLogCreateWithoutClientInput[] | ProgressLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutClientInput | ProgressLogCreateOrConnectWithoutClientInput[]
    createMany?: ProgressLogCreateManyClientInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PaymentCreateWithoutClientInput, PaymentUncheckedCreateWithoutClientInput> | PaymentCreateWithoutClientInput[] | PaymentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClientInput | PaymentCreateOrConnectWithoutClientInput[]
    createMany?: PaymentCreateManyClientInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    upsert?: UserUpsertWithoutClientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientInput, UserUpdateWithoutClientInput>, UserUncheckedUpdateWithoutClientInput>
  }

  export type CoachUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<CoachCreateWithoutClientsInput, CoachUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CoachCreateOrConnectWithoutClientsInput
    upsert?: CoachUpsertWithoutClientsInput
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutClientsInput, CoachUpdateWithoutClientsInput>, CoachUncheckedUpdateWithoutClientsInput>
  }

  export type AssignmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<AssignmentCreateWithoutClientInput, AssignmentUncheckedCreateWithoutClientInput> | AssignmentCreateWithoutClientInput[] | AssignmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClientInput | AssignmentCreateOrConnectWithoutClientInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClientInput | AssignmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AssignmentCreateManyClientInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClientInput | AssignmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClientInput | AssignmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ProgressLogUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProgressLogCreateWithoutClientInput, ProgressLogUncheckedCreateWithoutClientInput> | ProgressLogCreateWithoutClientInput[] | ProgressLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutClientInput | ProgressLogCreateOrConnectWithoutClientInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutClientInput | ProgressLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProgressLogCreateManyClientInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutClientInput | ProgressLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutClientInput | ProgressLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutClientNestedInput = {
    create?: XOR<PaymentCreateWithoutClientInput, PaymentUncheckedCreateWithoutClientInput> | PaymentCreateWithoutClientInput[] | PaymentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClientInput | PaymentCreateOrConnectWithoutClientInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutClientInput | PaymentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PaymentCreateManyClientInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutClientInput | PaymentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutClientInput | PaymentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AssignmentCreateWithoutClientInput, AssignmentUncheckedCreateWithoutClientInput> | AssignmentCreateWithoutClientInput[] | AssignmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClientInput | AssignmentCreateOrConnectWithoutClientInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClientInput | AssignmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AssignmentCreateManyClientInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClientInput | AssignmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClientInput | AssignmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProgressLogCreateWithoutClientInput, ProgressLogUncheckedCreateWithoutClientInput> | ProgressLogCreateWithoutClientInput[] | ProgressLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutClientInput | ProgressLogCreateOrConnectWithoutClientInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutClientInput | ProgressLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProgressLogCreateManyClientInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutClientInput | ProgressLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutClientInput | ProgressLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PaymentCreateWithoutClientInput, PaymentUncheckedCreateWithoutClientInput> | PaymentCreateWithoutClientInput[] | PaymentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClientInput | PaymentCreateOrConnectWithoutClientInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutClientInput | PaymentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PaymentCreateManyClientInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutClientInput | PaymentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutClientInput | PaymentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedExercisesInput = {
    create?: XOR<UserCreateWithoutCreatedExercisesInput, UserUncheckedCreateWithoutCreatedExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedExercisesInput
    connect?: UserWhereUniqueInput
  }

  export type CoachExerciseCreateNestedManyWithoutBaseExerciseInput = {
    create?: XOR<CoachExerciseCreateWithoutBaseExerciseInput, CoachExerciseUncheckedCreateWithoutBaseExerciseInput> | CoachExerciseCreateWithoutBaseExerciseInput[] | CoachExerciseUncheckedCreateWithoutBaseExerciseInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutBaseExerciseInput | CoachExerciseCreateOrConnectWithoutBaseExerciseInput[]
    createMany?: CoachExerciseCreateManyBaseExerciseInputEnvelope
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
  }

  export type CoachExerciseUncheckedCreateNestedManyWithoutBaseExerciseInput = {
    create?: XOR<CoachExerciseCreateWithoutBaseExerciseInput, CoachExerciseUncheckedCreateWithoutBaseExerciseInput> | CoachExerciseCreateWithoutBaseExerciseInput[] | CoachExerciseUncheckedCreateWithoutBaseExerciseInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutBaseExerciseInput | CoachExerciseCreateOrConnectWithoutBaseExerciseInput[]
    createMany?: CoachExerciseCreateManyBaseExerciseInputEnvelope
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWeightTypeFieldUpdateOperationsInput = {
    set?: $Enums.WeightType
  }

  export type EnumWeightMeasurementTypeFieldUpdateOperationsInput = {
    set?: $Enums.WeightMeasurementType
  }

  export type UserUpdateOneRequiredWithoutCreatedExercisesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedExercisesInput, UserUncheckedCreateWithoutCreatedExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedExercisesInput
    upsert?: UserUpsertWithoutCreatedExercisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedExercisesInput, UserUpdateWithoutCreatedExercisesInput>, UserUncheckedUpdateWithoutCreatedExercisesInput>
  }

  export type CoachExerciseUpdateManyWithoutBaseExerciseNestedInput = {
    create?: XOR<CoachExerciseCreateWithoutBaseExerciseInput, CoachExerciseUncheckedCreateWithoutBaseExerciseInput> | CoachExerciseCreateWithoutBaseExerciseInput[] | CoachExerciseUncheckedCreateWithoutBaseExerciseInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutBaseExerciseInput | CoachExerciseCreateOrConnectWithoutBaseExerciseInput[]
    upsert?: CoachExerciseUpsertWithWhereUniqueWithoutBaseExerciseInput | CoachExerciseUpsertWithWhereUniqueWithoutBaseExerciseInput[]
    createMany?: CoachExerciseCreateManyBaseExerciseInputEnvelope
    set?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    disconnect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    delete?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    update?: CoachExerciseUpdateWithWhereUniqueWithoutBaseExerciseInput | CoachExerciseUpdateWithWhereUniqueWithoutBaseExerciseInput[]
    updateMany?: CoachExerciseUpdateManyWithWhereWithoutBaseExerciseInput | CoachExerciseUpdateManyWithWhereWithoutBaseExerciseInput[]
    deleteMany?: CoachExerciseScalarWhereInput | CoachExerciseScalarWhereInput[]
  }

  export type CoachExerciseUncheckedUpdateManyWithoutBaseExerciseNestedInput = {
    create?: XOR<CoachExerciseCreateWithoutBaseExerciseInput, CoachExerciseUncheckedCreateWithoutBaseExerciseInput> | CoachExerciseCreateWithoutBaseExerciseInput[] | CoachExerciseUncheckedCreateWithoutBaseExerciseInput[]
    connectOrCreate?: CoachExerciseCreateOrConnectWithoutBaseExerciseInput | CoachExerciseCreateOrConnectWithoutBaseExerciseInput[]
    upsert?: CoachExerciseUpsertWithWhereUniqueWithoutBaseExerciseInput | CoachExerciseUpsertWithWhereUniqueWithoutBaseExerciseInput[]
    createMany?: CoachExerciseCreateManyBaseExerciseInputEnvelope
    set?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    disconnect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    delete?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    connect?: CoachExerciseWhereUniqueInput | CoachExerciseWhereUniqueInput[]
    update?: CoachExerciseUpdateWithWhereUniqueWithoutBaseExerciseInput | CoachExerciseUpdateWithWhereUniqueWithoutBaseExerciseInput[]
    updateMany?: CoachExerciseUpdateManyWithWhereWithoutBaseExerciseInput | CoachExerciseUpdateManyWithWhereWithoutBaseExerciseInput[]
    deleteMany?: CoachExerciseScalarWhereInput | CoachExerciseScalarWhereInput[]
  }

  export type CoachCreateNestedOneWithoutExercisesInput = {
    create?: XOR<CoachCreateWithoutExercisesInput, CoachUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: CoachCreateOrConnectWithoutExercisesInput
    connect?: CoachWhereUniqueInput
  }

  export type GlobalExerciseCreateNestedOneWithoutCoachExercisesInput = {
    create?: XOR<GlobalExerciseCreateWithoutCoachExercisesInput, GlobalExerciseUncheckedCreateWithoutCoachExercisesInput>
    connectOrCreate?: GlobalExerciseCreateOrConnectWithoutCoachExercisesInput
    connect?: GlobalExerciseWhereUniqueInput
  }

  export type CoachUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<CoachCreateWithoutExercisesInput, CoachUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: CoachCreateOrConnectWithoutExercisesInput
    upsert?: CoachUpsertWithoutExercisesInput
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutExercisesInput, CoachUpdateWithoutExercisesInput>, CoachUncheckedUpdateWithoutExercisesInput>
  }

  export type GlobalExerciseUpdateOneRequiredWithoutCoachExercisesNestedInput = {
    create?: XOR<GlobalExerciseCreateWithoutCoachExercisesInput, GlobalExerciseUncheckedCreateWithoutCoachExercisesInput>
    connectOrCreate?: GlobalExerciseCreateOrConnectWithoutCoachExercisesInput
    upsert?: GlobalExerciseUpsertWithoutCoachExercisesInput
    connect?: GlobalExerciseWhereUniqueInput
    update?: XOR<XOR<GlobalExerciseUpdateToOneWithWhereWithoutCoachExercisesInput, GlobalExerciseUpdateWithoutCoachExercisesInput>, GlobalExerciseUncheckedUpdateWithoutCoachExercisesInput>
  }

  export type CoachCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<CoachCreateWithoutWorkoutsInput, CoachUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: CoachCreateOrConnectWithoutWorkoutsInput
    connect?: CoachWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<AssignmentCreateWithoutWorkoutInput, AssignmentUncheckedCreateWithoutWorkoutInput> | AssignmentCreateWithoutWorkoutInput[] | AssignmentUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkoutInput | AssignmentCreateOrConnectWithoutWorkoutInput[]
    createMany?: AssignmentCreateManyWorkoutInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<AssignmentCreateWithoutWorkoutInput, AssignmentUncheckedCreateWithoutWorkoutInput> | AssignmentCreateWithoutWorkoutInput[] | AssignmentUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkoutInput | AssignmentCreateOrConnectWithoutWorkoutInput[]
    createMany?: AssignmentCreateManyWorkoutInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CoachUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<CoachCreateWithoutWorkoutsInput, CoachUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: CoachCreateOrConnectWithoutWorkoutsInput
    upsert?: CoachUpsertWithoutWorkoutsInput
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutWorkoutsInput, CoachUpdateWithoutWorkoutsInput>, CoachUncheckedUpdateWithoutWorkoutsInput>
  }

  export type AssignmentUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<AssignmentCreateWithoutWorkoutInput, AssignmentUncheckedCreateWithoutWorkoutInput> | AssignmentCreateWithoutWorkoutInput[] | AssignmentUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkoutInput | AssignmentCreateOrConnectWithoutWorkoutInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutWorkoutInput | AssignmentUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: AssignmentCreateManyWorkoutInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutWorkoutInput | AssignmentUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutWorkoutInput | AssignmentUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<AssignmentCreateWithoutWorkoutInput, AssignmentUncheckedCreateWithoutWorkoutInput> | AssignmentCreateWithoutWorkoutInput[] | AssignmentUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkoutInput | AssignmentCreateOrConnectWithoutWorkoutInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutWorkoutInput | AssignmentUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: AssignmentCreateManyWorkoutInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutWorkoutInput | AssignmentUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutWorkoutInput | AssignmentUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<WorkoutCreateWithoutAssignmentsInput, WorkoutUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutAssignmentsInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ClientCreateWithoutAssignmentsInput, ClientUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAssignmentsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProgressLogCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ProgressLogCreateWithoutAssignmentInput, ProgressLogUncheckedCreateWithoutAssignmentInput> | ProgressLogCreateWithoutAssignmentInput[] | ProgressLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutAssignmentInput | ProgressLogCreateOrConnectWithoutAssignmentInput[]
    createMany?: ProgressLogCreateManyAssignmentInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ProgressLogCreateWithoutAssignmentInput, ProgressLogUncheckedCreateWithoutAssignmentInput> | ProgressLogCreateWithoutAssignmentInput[] | ProgressLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutAssignmentInput | ProgressLogCreateOrConnectWithoutAssignmentInput[]
    createMany?: ProgressLogCreateManyAssignmentInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type WorkoutUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<WorkoutCreateWithoutAssignmentsInput, WorkoutUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutAssignmentsInput
    upsert?: WorkoutUpsertWithoutAssignmentsInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutAssignmentsInput, WorkoutUpdateWithoutAssignmentsInput>, WorkoutUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ClientUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ClientCreateWithoutAssignmentsInput, ClientUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAssignmentsInput
    upsert?: ClientUpsertWithoutAssignmentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAssignmentsInput, ClientUpdateWithoutAssignmentsInput>, ClientUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ProgressLogUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ProgressLogCreateWithoutAssignmentInput, ProgressLogUncheckedCreateWithoutAssignmentInput> | ProgressLogCreateWithoutAssignmentInput[] | ProgressLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutAssignmentInput | ProgressLogCreateOrConnectWithoutAssignmentInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutAssignmentInput | ProgressLogUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ProgressLogCreateManyAssignmentInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutAssignmentInput | ProgressLogUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutAssignmentInput | ProgressLogUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ProgressLogCreateWithoutAssignmentInput, ProgressLogUncheckedCreateWithoutAssignmentInput> | ProgressLogCreateWithoutAssignmentInput[] | ProgressLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutAssignmentInput | ProgressLogCreateOrConnectWithoutAssignmentInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutAssignmentInput | ProgressLogUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ProgressLogCreateManyAssignmentInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutAssignmentInput | ProgressLogUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutAssignmentInput | ProgressLogUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<ClientCreateWithoutProgressLogsInput, ClientUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProgressLogsInput
    connect?: ClientWhereUniqueInput
  }

  export type AssignmentCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<AssignmentCreateWithoutProgressLogsInput, AssignmentUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutProgressLogsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutProgressLogsNestedInput = {
    create?: XOR<ClientCreateWithoutProgressLogsInput, ClientUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProgressLogsInput
    upsert?: ClientUpsertWithoutProgressLogsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProgressLogsInput, ClientUpdateWithoutProgressLogsInput>, ClientUncheckedUpdateWithoutProgressLogsInput>
  }

  export type AssignmentUpdateOneRequiredWithoutProgressLogsNestedInput = {
    create?: XOR<AssignmentCreateWithoutProgressLogsInput, AssignmentUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutProgressLogsInput
    upsert?: AssignmentUpsertWithoutProgressLogsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutProgressLogsInput, AssignmentUpdateWithoutProgressLogsInput>, AssignmentUncheckedUpdateWithoutProgressLogsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ClientCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ClientCreateWithoutPaymentsInput, ClientUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPaymentsInput
    connect?: ClientWhereUniqueInput
  }

  export type CoachCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CoachCreateWithoutPaymentsInput, CoachUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CoachCreateOrConnectWithoutPaymentsInput
    connect?: CoachWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ClientUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ClientCreateWithoutPaymentsInput, ClientUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPaymentsInput
    upsert?: ClientUpsertWithoutPaymentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPaymentsInput, ClientUpdateWithoutPaymentsInput>, ClientUncheckedUpdateWithoutPaymentsInput>
  }

  export type CoachUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CoachCreateWithoutPaymentsInput, CoachUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CoachCreateOrConnectWithoutPaymentsInput
    upsert?: CoachUpsertWithoutPaymentsInput
    connect?: CoachWhereUniqueInput
    update?: XOR<XOR<CoachUpdateToOneWithWhereWithoutPaymentsInput, CoachUpdateWithoutPaymentsInput>, CoachUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWeightTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightType | EnumWeightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightTypeFilter<$PrismaModel> | $Enums.WeightType
  }

  export type NestedEnumWeightMeasurementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightMeasurementType | EnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightMeasurementTypeFilter<$PrismaModel> | $Enums.WeightMeasurementType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumWeightTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightType | EnumWeightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightType[] | ListEnumWeightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightTypeWithAggregatesFilter<$PrismaModel> | $Enums.WeightType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeightTypeFilter<$PrismaModel>
    _max?: NestedEnumWeightTypeFilter<$PrismaModel>
  }

  export type NestedEnumWeightMeasurementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightMeasurementType | EnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightMeasurementType[] | ListEnumWeightMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightMeasurementTypeWithAggregatesFilter<$PrismaModel> | $Enums.WeightMeasurementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeightMeasurementTypeFilter<$PrismaModel>
    _max?: NestedEnumWeightMeasurementTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CoachCreateWithoutUserInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    exercises?: CoachExerciseCreateNestedManyWithoutCoachInput
    workouts?: WorkoutCreateNestedManyWithoutCoachInput
    clients?: ClientCreateNestedManyWithoutCoachInput
    payments?: PaymentCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutUserInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    exercises?: CoachExerciseUncheckedCreateNestedManyWithoutCoachInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutCoachInput
    clients?: ClientUncheckedCreateNestedManyWithoutCoachInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachCreateOrConnectWithoutUserInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutUserInput, CoachUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateWithoutUserInput = {
    id?: string
    onboardingData: JsonNullValueInput | InputJsonValue
    coach: CoachCreateNestedOneWithoutClientsInput
    assignments?: AssignmentCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogCreateNestedManyWithoutClientInput
    payments?: PaymentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string
    coachId: string
    onboardingData: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutClientInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type GlobalExerciseCreateWithoutCreatedByInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    coachExercises?: CoachExerciseCreateNestedManyWithoutBaseExerciseInput
  }

  export type GlobalExerciseUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    coachExercises?: CoachExerciseUncheckedCreateNestedManyWithoutBaseExerciseInput
  }

  export type GlobalExerciseCreateOrConnectWithoutCreatedByInput = {
    where: GlobalExerciseWhereUniqueInput
    create: XOR<GlobalExerciseCreateWithoutCreatedByInput, GlobalExerciseUncheckedCreateWithoutCreatedByInput>
  }

  export type GlobalExerciseCreateManyCreatedByInputEnvelope = {
    data: GlobalExerciseCreateManyCreatedByInput | GlobalExerciseCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    sentAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    sentAt?: Date | string
    receiverId: string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    content: string
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    sentAt?: Date | string
    senderId: string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type CoachUpsertWithoutUserInput = {
    update: XOR<CoachUpdateWithoutUserInput, CoachUncheckedUpdateWithoutUserInput>
    create: XOR<CoachCreateWithoutUserInput, CoachUncheckedCreateWithoutUserInput>
    where?: CoachWhereInput
  }

  export type CoachUpdateToOneWithWhereWithoutUserInput = {
    where?: CoachWhereInput
    data: XOR<CoachUpdateWithoutUserInput, CoachUncheckedUpdateWithoutUserInput>
  }

  export type CoachUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: CoachExerciseUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUpdateManyWithoutCoachNestedInput
    clients?: ClientUpdateManyWithoutCoachNestedInput
    payments?: PaymentUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: CoachExerciseUncheckedUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutCoachNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCoachNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type ClientUpsertWithoutUserInput = {
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    coach?: CoachUpdateOneRequiredWithoutClientsNestedInput
    assignments?: AssignmentUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutClientNestedInput
    payments?: PaymentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutClientNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type GlobalExerciseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: GlobalExerciseWhereUniqueInput
    update: XOR<GlobalExerciseUpdateWithoutCreatedByInput, GlobalExerciseUncheckedUpdateWithoutCreatedByInput>
    create: XOR<GlobalExerciseCreateWithoutCreatedByInput, GlobalExerciseUncheckedCreateWithoutCreatedByInput>
  }

  export type GlobalExerciseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: GlobalExerciseWhereUniqueInput
    data: XOR<GlobalExerciseUpdateWithoutCreatedByInput, GlobalExerciseUncheckedUpdateWithoutCreatedByInput>
  }

  export type GlobalExerciseUpdateManyWithWhereWithoutCreatedByInput = {
    where: GlobalExerciseScalarWhereInput
    data: XOR<GlobalExerciseUpdateManyMutationInput, GlobalExerciseUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type GlobalExerciseScalarWhereInput = {
    AND?: GlobalExerciseScalarWhereInput | GlobalExerciseScalarWhereInput[]
    OR?: GlobalExerciseScalarWhereInput[]
    NOT?: GlobalExerciseScalarWhereInput | GlobalExerciseScalarWhereInput[]
    id?: StringFilter<"GlobalExercise"> | string
    name?: StringFilter<"GlobalExercise"> | string
    videoUrl?: StringFilter<"GlobalExercise"> | string
    instructionsText?: StringFilter<"GlobalExercise"> | string
    defaultSets?: IntFilter<"GlobalExercise"> | number
    defaultReps?: IntFilter<"GlobalExercise"> | number
    defaultWeight?: FloatFilter<"GlobalExercise"> | number
    weightType?: EnumWeightTypeFilter<"GlobalExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFilter<"GlobalExercise"> | $Enums.WeightMeasurementType
    createdById?: StringFilter<"GlobalExercise"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutCoachInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    client?: ClientCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCoachInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseUncheckedCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCoachInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachInput, UserUncheckedCreateWithoutCoachInput>
  }

  export type CoachExerciseCreateWithoutCoachInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    baseExercise: GlobalExerciseCreateNestedOneWithoutCoachExercisesInput
  }

  export type CoachExerciseUncheckedCreateWithoutCoachInput = {
    id?: string
    baseExerciseId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type CoachExerciseCreateOrConnectWithoutCoachInput = {
    where: CoachExerciseWhereUniqueInput
    create: XOR<CoachExerciseCreateWithoutCoachInput, CoachExerciseUncheckedCreateWithoutCoachInput>
  }

  export type CoachExerciseCreateManyCoachInputEnvelope = {
    data: CoachExerciseCreateManyCoachInput | CoachExerciseCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCreateWithoutCoachInput = {
    id?: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutCoachInput = {
    id?: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutCoachInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutCoachInput, WorkoutUncheckedCreateWithoutCoachInput>
  }

  export type WorkoutCreateManyCoachInputEnvelope = {
    data: WorkoutCreateManyCoachInput | WorkoutCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutCoachInput = {
    id?: string
    onboardingData: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutClientInput
    assignments?: AssignmentCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogCreateNestedManyWithoutClientInput
    payments?: PaymentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCoachInput = {
    id?: string
    userId: string
    onboardingData: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutClientInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCoachInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCoachInput, ClientUncheckedCreateWithoutCoachInput>
  }

  export type ClientCreateManyCoachInputEnvelope = {
    data: ClientCreateManyCoachInput | ClientCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCoachInput = {
    id?: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCoachInput = {
    id?: string
    clientId: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCoachInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCoachInput, PaymentUncheckedCreateWithoutCoachInput>
  }

  export type PaymentCreateManyCoachInputEnvelope = {
    data: PaymentCreateManyCoachInput | PaymentCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCoachInput = {
    update: XOR<UserUpdateWithoutCoachInput, UserUncheckedUpdateWithoutCoachInput>
    create: XOR<UserCreateWithoutCoachInput, UserUncheckedCreateWithoutCoachInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachInput, UserUncheckedUpdateWithoutCoachInput>
  }

  export type UserUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUncheckedUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CoachExerciseUpsertWithWhereUniqueWithoutCoachInput = {
    where: CoachExerciseWhereUniqueInput
    update: XOR<CoachExerciseUpdateWithoutCoachInput, CoachExerciseUncheckedUpdateWithoutCoachInput>
    create: XOR<CoachExerciseCreateWithoutCoachInput, CoachExerciseUncheckedCreateWithoutCoachInput>
  }

  export type CoachExerciseUpdateWithWhereUniqueWithoutCoachInput = {
    where: CoachExerciseWhereUniqueInput
    data: XOR<CoachExerciseUpdateWithoutCoachInput, CoachExerciseUncheckedUpdateWithoutCoachInput>
  }

  export type CoachExerciseUpdateManyWithWhereWithoutCoachInput = {
    where: CoachExerciseScalarWhereInput
    data: XOR<CoachExerciseUpdateManyMutationInput, CoachExerciseUncheckedUpdateManyWithoutCoachInput>
  }

  export type CoachExerciseScalarWhereInput = {
    AND?: CoachExerciseScalarWhereInput | CoachExerciseScalarWhereInput[]
    OR?: CoachExerciseScalarWhereInput[]
    NOT?: CoachExerciseScalarWhereInput | CoachExerciseScalarWhereInput[]
    id?: StringFilter<"CoachExercise"> | string
    coachId?: StringFilter<"CoachExercise"> | string
    baseExerciseId?: StringFilter<"CoachExercise"> | string
    name?: StringFilter<"CoachExercise"> | string
    videoUrl?: StringFilter<"CoachExercise"> | string
    instructionsText?: StringFilter<"CoachExercise"> | string
    defaultSets?: IntFilter<"CoachExercise"> | number
    defaultReps?: IntFilter<"CoachExercise"> | number
    defaultWeight?: FloatFilter<"CoachExercise"> | number
    weightType?: EnumWeightTypeFilter<"CoachExercise"> | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFilter<"CoachExercise"> | $Enums.WeightMeasurementType
  }

  export type WorkoutUpsertWithWhereUniqueWithoutCoachInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutCoachInput, WorkoutUncheckedUpdateWithoutCoachInput>
    create: XOR<WorkoutCreateWithoutCoachInput, WorkoutUncheckedCreateWithoutCoachInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutCoachInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutCoachInput, WorkoutUncheckedUpdateWithoutCoachInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutCoachInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutCoachInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    coachId?: StringFilter<"Workout"> | string
    title?: StringFilter<"Workout"> | string
    description?: StringFilter<"Workout"> | string
    exercises?: JsonFilter<"Workout">
    createdAt?: DateTimeFilter<"Workout"> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutCoachInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutCoachInput, ClientUncheckedUpdateWithoutCoachInput>
    create: XOR<ClientCreateWithoutCoachInput, ClientUncheckedCreateWithoutCoachInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutCoachInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutCoachInput, ClientUncheckedUpdateWithoutCoachInput>
  }

  export type ClientUpdateManyWithWhereWithoutCoachInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutCoachInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    userId?: StringFilter<"Client"> | string
    coachId?: StringFilter<"Client"> | string
    onboardingData?: JsonFilter<"Client">
  }

  export type PaymentUpsertWithWhereUniqueWithoutCoachInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCoachInput, PaymentUncheckedUpdateWithoutCoachInput>
    create: XOR<PaymentCreateWithoutCoachInput, PaymentUncheckedCreateWithoutCoachInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCoachInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCoachInput, PaymentUncheckedUpdateWithoutCoachInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCoachInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCoachInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    clientId?: StringFilter<"Payment"> | string
    coachId?: StringFilter<"Payment"> | string
    stripeSubscriptionId?: StringNullableFilter<"Payment"> | string | null
    stripeInvoiceId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutClientInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutClientInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseUncheckedCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type CoachCreateWithoutClientsInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    user: UserCreateNestedOneWithoutCoachInput
    exercises?: CoachExerciseCreateNestedManyWithoutCoachInput
    workouts?: WorkoutCreateNestedManyWithoutCoachInput
    payments?: PaymentCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutClientsInput = {
    id?: string
    userId: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    exercises?: CoachExerciseUncheckedCreateNestedManyWithoutCoachInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutCoachInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachCreateOrConnectWithoutClientsInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutClientsInput, CoachUncheckedCreateWithoutClientsInput>
  }

  export type AssignmentCreateWithoutClientInput = {
    id?: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    workout: WorkoutCreateNestedOneWithoutAssignmentsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutClientInput = {
    id?: string
    workoutId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutClientInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutClientInput, AssignmentUncheckedCreateWithoutClientInput>
  }

  export type AssignmentCreateManyClientInputEnvelope = {
    data: AssignmentCreateManyClientInput | AssignmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProgressLogCreateWithoutClientInput = {
    id?: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutClientInput = {
    id?: string
    assignmentId: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ProgressLogCreateOrConnectWithoutClientInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutClientInput, ProgressLogUncheckedCreateWithoutClientInput>
  }

  export type ProgressLogCreateManyClientInputEnvelope = {
    data: ProgressLogCreateManyClientInput | ProgressLogCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutClientInput = {
    id?: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    coach: CoachCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutClientInput = {
    id?: string
    coachId: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutClientInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutClientInput, PaymentUncheckedCreateWithoutClientInput>
  }

  export type PaymentCreateManyClientInputEnvelope = {
    data: PaymentCreateManyClientInput | PaymentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientInput = {
    update: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
  }

  export type UserUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUncheckedUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CoachUpsertWithoutClientsInput = {
    update: XOR<CoachUpdateWithoutClientsInput, CoachUncheckedUpdateWithoutClientsInput>
    create: XOR<CoachCreateWithoutClientsInput, CoachUncheckedCreateWithoutClientsInput>
    where?: CoachWhereInput
  }

  export type CoachUpdateToOneWithWhereWithoutClientsInput = {
    where?: CoachWhereInput
    data: XOR<CoachUpdateWithoutClientsInput, CoachUncheckedUpdateWithoutClientsInput>
  }

  export type CoachUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCoachNestedInput
    exercises?: CoachExerciseUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUpdateManyWithoutCoachNestedInput
    payments?: PaymentUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: CoachExerciseUncheckedUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutCoachNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type AssignmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutClientInput, AssignmentUncheckedUpdateWithoutClientInput>
    create: XOR<AssignmentCreateWithoutClientInput, AssignmentUncheckedCreateWithoutClientInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutClientInput, AssignmentUncheckedUpdateWithoutClientInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutClientInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutClientInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    workoutId?: StringFilter<"Assignment"> | string
    clientId?: StringFilter<"Assignment"> | string
    scheduledDate?: DateTimeFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutClientInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutClientInput, ProgressLogUncheckedUpdateWithoutClientInput>
    create: XOR<ProgressLogCreateWithoutClientInput, ProgressLogUncheckedCreateWithoutClientInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutClientInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutClientInput, ProgressLogUncheckedUpdateWithoutClientInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutClientInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutClientInput>
  }

  export type ProgressLogScalarWhereInput = {
    AND?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
    OR?: ProgressLogScalarWhereInput[]
    NOT?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
    id?: StringFilter<"ProgressLog"> | string
    clientId?: StringFilter<"ProgressLog"> | string
    assignmentId?: StringFilter<"ProgressLog"> | string
    exerciseResults?: JsonFilter<"ProgressLog">
    notes?: StringNullableFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutClientInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutClientInput, PaymentUncheckedUpdateWithoutClientInput>
    create: XOR<PaymentCreateWithoutClientInput, PaymentUncheckedCreateWithoutClientInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutClientInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutClientInput, PaymentUncheckedUpdateWithoutClientInput>
  }

  export type PaymentUpdateManyWithWhereWithoutClientInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutClientInput>
  }

  export type UserCreateWithoutCreatedExercisesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachCreateNestedOneWithoutUserInput
    client?: ClientCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCreatedExercisesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCreatedExercisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedExercisesInput, UserUncheckedCreateWithoutCreatedExercisesInput>
  }

  export type CoachExerciseCreateWithoutBaseExerciseInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    coach: CoachCreateNestedOneWithoutExercisesInput
  }

  export type CoachExerciseUncheckedCreateWithoutBaseExerciseInput = {
    id?: string
    coachId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type CoachExerciseCreateOrConnectWithoutBaseExerciseInput = {
    where: CoachExerciseWhereUniqueInput
    create: XOR<CoachExerciseCreateWithoutBaseExerciseInput, CoachExerciseUncheckedCreateWithoutBaseExerciseInput>
  }

  export type CoachExerciseCreateManyBaseExerciseInputEnvelope = {
    data: CoachExerciseCreateManyBaseExerciseInput | CoachExerciseCreateManyBaseExerciseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedExercisesInput = {
    update: XOR<UserUpdateWithoutCreatedExercisesInput, UserUncheckedUpdateWithoutCreatedExercisesInput>
    create: XOR<UserCreateWithoutCreatedExercisesInput, UserUncheckedCreateWithoutCreatedExercisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedExercisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedExercisesInput, UserUncheckedUpdateWithoutCreatedExercisesInput>
  }

  export type UserUpdateWithoutCreatedExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUpdateOneWithoutUserNestedInput
    client?: ClientUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CoachExerciseUpsertWithWhereUniqueWithoutBaseExerciseInput = {
    where: CoachExerciseWhereUniqueInput
    update: XOR<CoachExerciseUpdateWithoutBaseExerciseInput, CoachExerciseUncheckedUpdateWithoutBaseExerciseInput>
    create: XOR<CoachExerciseCreateWithoutBaseExerciseInput, CoachExerciseUncheckedCreateWithoutBaseExerciseInput>
  }

  export type CoachExerciseUpdateWithWhereUniqueWithoutBaseExerciseInput = {
    where: CoachExerciseWhereUniqueInput
    data: XOR<CoachExerciseUpdateWithoutBaseExerciseInput, CoachExerciseUncheckedUpdateWithoutBaseExerciseInput>
  }

  export type CoachExerciseUpdateManyWithWhereWithoutBaseExerciseInput = {
    where: CoachExerciseScalarWhereInput
    data: XOR<CoachExerciseUpdateManyMutationInput, CoachExerciseUncheckedUpdateManyWithoutBaseExerciseInput>
  }

  export type CoachCreateWithoutExercisesInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    user: UserCreateNestedOneWithoutCoachInput
    workouts?: WorkoutCreateNestedManyWithoutCoachInput
    clients?: ClientCreateNestedManyWithoutCoachInput
    payments?: PaymentCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    workouts?: WorkoutUncheckedCreateNestedManyWithoutCoachInput
    clients?: ClientUncheckedCreateNestedManyWithoutCoachInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachCreateOrConnectWithoutExercisesInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutExercisesInput, CoachUncheckedCreateWithoutExercisesInput>
  }

  export type GlobalExerciseCreateWithoutCoachExercisesInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    createdBy: UserCreateNestedOneWithoutCreatedExercisesInput
  }

  export type GlobalExerciseUncheckedCreateWithoutCoachExercisesInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
    createdById: string
  }

  export type GlobalExerciseCreateOrConnectWithoutCoachExercisesInput = {
    where: GlobalExerciseWhereUniqueInput
    create: XOR<GlobalExerciseCreateWithoutCoachExercisesInput, GlobalExerciseUncheckedCreateWithoutCoachExercisesInput>
  }

  export type CoachUpsertWithoutExercisesInput = {
    update: XOR<CoachUpdateWithoutExercisesInput, CoachUncheckedUpdateWithoutExercisesInput>
    create: XOR<CoachCreateWithoutExercisesInput, CoachUncheckedCreateWithoutExercisesInput>
    where?: CoachWhereInput
  }

  export type CoachUpdateToOneWithWhereWithoutExercisesInput = {
    where?: CoachWhereInput
    data: XOR<CoachUpdateWithoutExercisesInput, CoachUncheckedUpdateWithoutExercisesInput>
  }

  export type CoachUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCoachNestedInput
    workouts?: WorkoutUpdateManyWithoutCoachNestedInput
    clients?: ClientUpdateManyWithoutCoachNestedInput
    payments?: PaymentUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    workouts?: WorkoutUncheckedUpdateManyWithoutCoachNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCoachNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type GlobalExerciseUpsertWithoutCoachExercisesInput = {
    update: XOR<GlobalExerciseUpdateWithoutCoachExercisesInput, GlobalExerciseUncheckedUpdateWithoutCoachExercisesInput>
    create: XOR<GlobalExerciseCreateWithoutCoachExercisesInput, GlobalExerciseUncheckedCreateWithoutCoachExercisesInput>
    where?: GlobalExerciseWhereInput
  }

  export type GlobalExerciseUpdateToOneWithWhereWithoutCoachExercisesInput = {
    where?: GlobalExerciseWhereInput
    data: XOR<GlobalExerciseUpdateWithoutCoachExercisesInput, GlobalExerciseUncheckedUpdateWithoutCoachExercisesInput>
  }

  export type GlobalExerciseUpdateWithoutCoachExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    createdBy?: UserUpdateOneRequiredWithoutCreatedExercisesNestedInput
  }

  export type GlobalExerciseUncheckedUpdateWithoutCoachExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type CoachCreateWithoutWorkoutsInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    user: UserCreateNestedOneWithoutCoachInput
    exercises?: CoachExerciseCreateNestedManyWithoutCoachInput
    clients?: ClientCreateNestedManyWithoutCoachInput
    payments?: PaymentCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    userId: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    exercises?: CoachExerciseUncheckedCreateNestedManyWithoutCoachInput
    clients?: ClientUncheckedCreateNestedManyWithoutCoachInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachCreateOrConnectWithoutWorkoutsInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutWorkoutsInput, CoachUncheckedCreateWithoutWorkoutsInput>
  }

  export type AssignmentCreateWithoutWorkoutInput = {
    id?: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    client: ClientCreateNestedOneWithoutAssignmentsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutWorkoutInput = {
    id?: string
    clientId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutWorkoutInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutWorkoutInput, AssignmentUncheckedCreateWithoutWorkoutInput>
  }

  export type AssignmentCreateManyWorkoutInputEnvelope = {
    data: AssignmentCreateManyWorkoutInput | AssignmentCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type CoachUpsertWithoutWorkoutsInput = {
    update: XOR<CoachUpdateWithoutWorkoutsInput, CoachUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<CoachCreateWithoutWorkoutsInput, CoachUncheckedCreateWithoutWorkoutsInput>
    where?: CoachWhereInput
  }

  export type CoachUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: CoachWhereInput
    data: XOR<CoachUpdateWithoutWorkoutsInput, CoachUncheckedUpdateWithoutWorkoutsInput>
  }

  export type CoachUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCoachNestedInput
    exercises?: CoachExerciseUpdateManyWithoutCoachNestedInput
    clients?: ClientUpdateManyWithoutCoachNestedInput
    payments?: PaymentUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: CoachExerciseUncheckedUpdateManyWithoutCoachNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCoachNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type AssignmentUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutWorkoutInput, AssignmentUncheckedUpdateWithoutWorkoutInput>
    create: XOR<AssignmentCreateWithoutWorkoutInput, AssignmentUncheckedCreateWithoutWorkoutInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutWorkoutInput, AssignmentUncheckedUpdateWithoutWorkoutInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutWorkoutInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    coach: CoachCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    coachId: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutAssignmentsInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutAssignmentsInput, WorkoutUncheckedCreateWithoutAssignmentsInput>
  }

  export type ClientCreateWithoutAssignmentsInput = {
    id?: string
    onboardingData: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutClientInput
    coach: CoachCreateNestedOneWithoutClientsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutClientInput
    payments?: PaymentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    userId: string
    coachId: string
    onboardingData: JsonNullValueInput | InputJsonValue
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutClientInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAssignmentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAssignmentsInput, ClientUncheckedCreateWithoutAssignmentsInput>
  }

  export type ProgressLogCreateWithoutAssignmentInput = {
    id?: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutAssignmentInput = {
    id?: string
    clientId: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ProgressLogCreateOrConnectWithoutAssignmentInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutAssignmentInput, ProgressLogUncheckedCreateWithoutAssignmentInput>
  }

  export type ProgressLogCreateManyAssignmentInputEnvelope = {
    data: ProgressLogCreateManyAssignmentInput | ProgressLogCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutUpsertWithoutAssignmentsInput = {
    update: XOR<WorkoutUpdateWithoutAssignmentsInput, WorkoutUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<WorkoutCreateWithoutAssignmentsInput, WorkoutUncheckedCreateWithoutAssignmentsInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutAssignmentsInput, WorkoutUncheckedUpdateWithoutAssignmentsInput>
  }

  export type WorkoutUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpsertWithoutAssignmentsInput = {
    update: XOR<ClientUpdateWithoutAssignmentsInput, ClientUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ClientCreateWithoutAssignmentsInput, ClientUncheckedCreateWithoutAssignmentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAssignmentsInput, ClientUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ClientUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutClientNestedInput
    coach?: CoachUpdateOneRequiredWithoutClientsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutClientNestedInput
    payments?: PaymentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutClientNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutAssignmentInput, ProgressLogUncheckedUpdateWithoutAssignmentInput>
    create: XOR<ProgressLogCreateWithoutAssignmentInput, ProgressLogUncheckedCreateWithoutAssignmentInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutAssignmentInput, ProgressLogUncheckedUpdateWithoutAssignmentInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutAssignmentInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type ClientCreateWithoutProgressLogsInput = {
    id?: string
    onboardingData: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutClientInput
    coach: CoachCreateNestedOneWithoutClientsInput
    assignments?: AssignmentCreateNestedManyWithoutClientInput
    payments?: PaymentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    userId: string
    coachId: string
    onboardingData: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClientInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutProgressLogsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProgressLogsInput, ClientUncheckedCreateWithoutProgressLogsInput>
  }

  export type AssignmentCreateWithoutProgressLogsInput = {
    id?: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
    workout: WorkoutCreateNestedOneWithoutAssignmentsInput
    client: ClientCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    workoutId: string
    clientId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
  }

  export type AssignmentCreateOrConnectWithoutProgressLogsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutProgressLogsInput, AssignmentUncheckedCreateWithoutProgressLogsInput>
  }

  export type ClientUpsertWithoutProgressLogsInput = {
    update: XOR<ClientUpdateWithoutProgressLogsInput, ClientUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<ClientCreateWithoutProgressLogsInput, ClientUncheckedCreateWithoutProgressLogsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProgressLogsInput, ClientUncheckedUpdateWithoutProgressLogsInput>
  }

  export type ClientUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutClientNestedInput
    coach?: CoachUpdateOneRequiredWithoutClientsNestedInput
    assignments?: AssignmentUpdateManyWithoutClientNestedInput
    payments?: PaymentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedUpdateManyWithoutClientNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AssignmentUpsertWithoutProgressLogsInput = {
    update: XOR<AssignmentUpdateWithoutProgressLogsInput, AssignmentUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<AssignmentCreateWithoutProgressLogsInput, AssignmentUncheckedCreateWithoutProgressLogsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutProgressLogsInput, AssignmentUncheckedUpdateWithoutProgressLogsInput>
  }

  export type AssignmentUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    workout?: WorkoutUpdateOneRequiredWithoutAssignmentsNestedInput
    client?: ClientUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachCreateNestedOneWithoutUserInput
    client?: ClientCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseCreateNestedManyWithoutCreatedByInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseUncheckedCreateNestedManyWithoutCreatedByInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachCreateNestedOneWithoutUserInput
    client?: ClientCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    profileInfo: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: string | null
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput
    client?: ClientUncheckedCreateNestedOneWithoutUserInput
    createdExercises?: GlobalExerciseUncheckedCreateNestedManyWithoutCreatedByInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUpdateOneWithoutUserNestedInput
    client?: ClientUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUpdateManyWithoutCreatedByNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUncheckedUpdateManyWithoutCreatedByNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUpdateOneWithoutUserNestedInput
    client?: ClientUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileInfo?: JsonNullValueInput | InputJsonValue
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: CoachUncheckedUpdateOneWithoutUserNestedInput
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput
    createdExercises?: GlobalExerciseUncheckedUpdateManyWithoutCreatedByNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ClientCreateWithoutPaymentsInput = {
    id?: string
    onboardingData: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutClientInput
    coach: CoachCreateNestedOneWithoutClientsInput
    assignments?: AssignmentCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    coachId: string
    onboardingData: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClientInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPaymentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPaymentsInput, ClientUncheckedCreateWithoutPaymentsInput>
  }

  export type CoachCreateWithoutPaymentsInput = {
    id?: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    user: UserCreateNestedOneWithoutCoachInput
    exercises?: CoachExerciseCreateNestedManyWithoutCoachInput
    workouts?: WorkoutCreateNestedManyWithoutCoachInput
    clients?: ClientCreateNestedManyWithoutCoachInput
  }

  export type CoachUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    businessName?: string | null
    subscriptionPlan?: string | null
    subscriptionId?: string | null
    exercises?: CoachExerciseUncheckedCreateNestedManyWithoutCoachInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutCoachInput
    clients?: ClientUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachCreateOrConnectWithoutPaymentsInput = {
    where: CoachWhereUniqueInput
    create: XOR<CoachCreateWithoutPaymentsInput, CoachUncheckedCreateWithoutPaymentsInput>
  }

  export type ClientUpsertWithoutPaymentsInput = {
    update: XOR<ClientUpdateWithoutPaymentsInput, ClientUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ClientCreateWithoutPaymentsInput, ClientUncheckedCreateWithoutPaymentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPaymentsInput, ClientUncheckedUpdateWithoutPaymentsInput>
  }

  export type ClientUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutClientNestedInput
    coach?: CoachUpdateOneRequiredWithoutClientsNestedInput
    assignments?: AssignmentUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type CoachUpsertWithoutPaymentsInput = {
    update: XOR<CoachUpdateWithoutPaymentsInput, CoachUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CoachCreateWithoutPaymentsInput, CoachUncheckedCreateWithoutPaymentsInput>
    where?: CoachWhereInput
  }

  export type CoachUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CoachWhereInput
    data: XOR<CoachUpdateWithoutPaymentsInput, CoachUncheckedUpdateWithoutPaymentsInput>
  }

  export type CoachUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCoachNestedInput
    exercises?: CoachExerciseUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUpdateManyWithoutCoachNestedInput
    clients?: ClientUpdateManyWithoutCoachNestedInput
  }

  export type CoachUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: CoachExerciseUncheckedUpdateManyWithoutCoachNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutCoachNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type GlobalExerciseCreateManyCreatedByInput = {
    id?: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    sentAt?: Date | string
    receiverId: string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    content: string
    sentAt?: Date | string
    senderId: string
  }

  export type GlobalExerciseUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    coachExercises?: CoachExerciseUpdateManyWithoutBaseExerciseNestedInput
  }

  export type GlobalExerciseUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    coachExercises?: CoachExerciseUncheckedUpdateManyWithoutBaseExerciseNestedInput
  }

  export type GlobalExerciseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type CoachExerciseCreateManyCoachInput = {
    id?: string
    baseExerciseId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type WorkoutCreateManyCoachInput = {
    id?: string
    title: string
    description: string
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ClientCreateManyCoachInput = {
    id?: string
    userId: string
    onboardingData: JsonNullValueInput | InputJsonValue
  }

  export type PaymentCreateManyCoachInput = {
    id?: string
    clientId: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type CoachExerciseUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    baseExercise?: GlobalExerciseUpdateOneRequiredWithoutCoachExercisesNestedInput
  }

  export type CoachExerciseUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseExerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type CoachExerciseUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseExerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type WorkoutUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutClientNestedInput
    assignments?: AssignmentUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutClientNestedInput
    payments?: PaymentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
    assignments?: AssignmentUncheckedUpdateManyWithoutClientNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutClientNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    onboardingData?: JsonNullValueInput | InputJsonValue
  }

  export type PaymentUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyClientInput = {
    id?: string
    workoutId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
  }

  export type ProgressLogCreateManyClientInput = {
    id?: string
    assignmentId: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyClientInput = {
    id?: string
    coachId: string
    stripeSubscriptionId?: string | null
    stripeInvoiceId: string
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type AssignmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    workout?: WorkoutUpdateOneRequiredWithoutAssignmentsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type ProgressLogUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachExerciseCreateManyBaseExerciseInput = {
    id?: string
    coachId: string
    name: string
    videoUrl: string
    instructionsText: string
    defaultSets: number
    defaultReps: number
    defaultWeight: number
    weightType: $Enums.WeightType
    weightMeasurementType: $Enums.WeightMeasurementType
  }

  export type CoachExerciseUpdateWithoutBaseExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
    coach?: CoachUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type CoachExerciseUncheckedUpdateWithoutBaseExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type CoachExerciseUncheckedUpdateManyWithoutBaseExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    instructionsText?: StringFieldUpdateOperationsInput | string
    defaultSets?: IntFieldUpdateOperationsInput | number
    defaultReps?: IntFieldUpdateOperationsInput | number
    defaultWeight?: FloatFieldUpdateOperationsInput | number
    weightType?: EnumWeightTypeFieldUpdateOperationsInput | $Enums.WeightType
    weightMeasurementType?: EnumWeightMeasurementTypeFieldUpdateOperationsInput | $Enums.WeightMeasurementType
  }

  export type AssignmentCreateManyWorkoutInput = {
    id?: string
    clientId: string
    scheduledDate: Date | string
    status: $Enums.AssignmentStatus
  }

  export type AssignmentUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    client?: ClientUpdateOneRequiredWithoutAssignmentsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
  }

  export type ProgressLogCreateManyAssignmentInput = {
    id?: string
    clientId: string
    exerciseResults: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type ProgressLogUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    exerciseResults?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}