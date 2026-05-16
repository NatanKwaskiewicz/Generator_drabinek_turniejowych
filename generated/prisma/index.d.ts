/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model Tournament
 *
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Participant
 *
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Teams
 *
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model TournamentTeam
 *
 */
export type TournamentTeam =
    $Result.DefaultSelection<Prisma.$TournamentTeamPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tournaments
 * const tournaments = await prisma.tournament.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions =
        Prisma.PrismaClientOptions,
    const U = 'log' extends keyof ClientOptions
        ? ClientOptions['log'] extends Array<
              Prisma.LogLevel | Prisma.LogDefinition
          >
            ? Prisma.GetEvents<ClientOptions['log']>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */

    constructor(
        optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
    )
    $on<V extends U>(
        eventType: V,
        callback: (
            event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
        ) => void
    ): PrismaClient

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<number>

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
    $executeRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<number>

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<T>

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
    $queryRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<T>

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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

    $transaction<R>(
        fn: (
            prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
        ) => $Utils.JsPromise<R>,
        options?: {
            maxWait?: number
            timeout?: number
            isolationLevel?: Prisma.TransactionIsolationLevel
        }
    ): $Utils.JsPromise<R>

    $extends: $Extensions.ExtendsHook<
        'extends',
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs
            }
        >
    >

    /**
     * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * ```
     */
    get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Participants
     * const participants = await prisma.participant.findMany()
     * ```
     */
    get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Teams
     * const teams = await prisma.teams.findMany()
     * ```
     */
    get teams(): Prisma.TeamsDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tournamentTeam`: Exposes CRUD operations for the **TournamentTeam** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more TournamentTeams
     * const tournamentTeams = await prisma.tournamentTeam.findMany()
     * ```
     */
    get tournamentTeam(): Prisma.TournamentTeamDelegate<ExtArgs, ClientOptions>
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
     * Prisma Client JS version: 6.19.3
     * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
     */
    export type PrismaVersion = {
        client: string
    }

    export const prismaVersion: PrismaVersion

    /**
     * Utility Types
     */

    export import Bytes = runtime.Bytes
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
    export type PromiseType<T extends PromiseLike<any>> =
        T extends PromiseLike<infer U> ? U : T

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<
        T extends (...args: any) => $Utils.JsPromise<any>,
    > = PromiseType<ReturnType<T>>

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    export type Enumerable<T> = T | Array<T>

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
        [key in keyof T]: key extends keyof U ? T[key] : never
    }

    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } & (T extends SelectAndInclude
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
    } & K

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object
        ? U extends object
            ? (Without<T, U> & U) | (Without<U, T> & T)
            : U
        : T

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
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
    export type UnEnumerate<T extends unknown> =
        T extends Array<infer U> ? U : T

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
        }[K]

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<
        __Either<O, K>
    >

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>
        0: EitherLoose<O, K>
    }[strict]

    type Either<
        O extends object,
        K extends Key,
        strict extends Boolean = 1,
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
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
    } & {}

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>
            }
        >
    >

    type Key = string | number | symbol
    type AtBasic<O extends object, K extends Key> = K extends keyof O
        ? O[K]
        : never
    type AtStrict<O extends object, K extends Key> = O[K & keyof O]
    type AtLoose<O extends object, K extends Key> = O extends unknown
        ? AtStrict<O, K>
        : never
    export type At<
        O extends object,
        K extends Key,
        strict extends Boolean = 1,
    > = {
        1: AtStrict<O, K>
        0: AtLoose<O, K>
    }[strict]

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
              [K in keyof A]: A[K]
          } & {}

    export type OptionalFlat<O> = {
        [K in keyof O]?: O[K]
    } & {}

    type _Record<K extends keyof any, T> = {
        [P in K]: T
    }

    // cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never

    // this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >

    type _Strict<U, _U = U> = U extends unknown
        ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
        : never

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

    type Cast<A, B> = A extends B ? A : B

    export const type: unique symbol

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never
          }
        : never

    type FieldPaths<
        T,
        U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
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
                ? GetHavingFields<
                      UnEnumerate<TK> extends object
                          ? Merge<UnEnumerate<TK>>
                          : never
                  >
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
    type PickEnumerable<
        T,
        K extends Enumerable<keyof T> | keyof T,
    > = Prisma__Pick<T, MaybeTupleToUnion<K>>

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
        ? never
        : T

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

    type FieldRefInputType<Model, FieldType> = Model extends never
        ? never
        : FieldRef<Model, FieldType>

    export const ModelName: {
        Tournament: 'Tournament'
        Participant: 'Participant'
        Teams: 'Teams'
        TournamentTeam: 'TournamentTeam'
    }

    export type ModelName = (typeof ModelName)[keyof typeof ModelName]

    export type Datasources = {
        db?: Datasource
    }

    interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
        { extArgs: $Extensions.InternalArgs },
        $Utils.Record<string, any>
    > {
        returns: Prisma.TypeMap<
            this['params']['extArgs'],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >
    }

    export type TypeMap<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > = {
        globalOmitOptions: {
            omit: GlobalOmitOptions
        }
        meta: {
            modelProps:
                | 'tournament'
                | 'participant'
                | 'teams'
                | 'tournamentTeam'
            txIsolationLevel: Prisma.TransactionIsolationLevel
        }
        model: {
            Tournament: {
                payload: Prisma.$TournamentPayload<ExtArgs>
                fields: Prisma.TournamentFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.TournamentFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
                    }
                    findFirst: {
                        args: Prisma.TournamentFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
                    }
                    findMany: {
                        args: Prisma.TournamentFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
                    }
                    create: {
                        args: Prisma.TournamentCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
                    }
                    createMany: {
                        args: Prisma.TournamentCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.TournamentDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
                    }
                    update: {
                        args: Prisma.TournamentUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
                    }
                    deleteMany: {
                        args: Prisma.TournamentDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.TournamentUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.TournamentUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
                    }
                    aggregate: {
                        args: Prisma.TournamentAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTournament>
                    }
                    groupBy: {
                        args: Prisma.TournamentGroupByArgs<ExtArgs>
                        result: $Utils.Optional<TournamentGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.TournamentCountArgs<ExtArgs>
                        result:
                            | $Utils.Optional<TournamentCountAggregateOutputType>
                            | number
                    }
                }
            }
            Participant: {
                payload: Prisma.$ParticipantPayload<ExtArgs>
                fields: Prisma.ParticipantFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
                    }
                    findFirst: {
                        args: Prisma.ParticipantFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
                    }
                    findMany: {
                        args: Prisma.ParticipantFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
                    }
                    create: {
                        args: Prisma.ParticipantCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
                    }
                    createMany: {
                        args: Prisma.ParticipantCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.ParticipantDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
                    }
                    update: {
                        args: Prisma.ParticipantUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
                    }
                    deleteMany: {
                        args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.ParticipantUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
                    }
                    aggregate: {
                        args: Prisma.ParticipantAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateParticipant>
                    }
                    groupBy: {
                        args: Prisma.ParticipantGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ParticipantGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ParticipantCountArgs<ExtArgs>
                        result:
                            | $Utils.Optional<ParticipantCountAggregateOutputType>
                            | number
                    }
                }
            }
            Teams: {
                payload: Prisma.$TeamsPayload<ExtArgs>
                fields: Prisma.TeamsFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.TeamsFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
                    }
                    findFirst: {
                        args: Prisma.TeamsFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
                    }
                    findMany: {
                        args: Prisma.TeamsFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
                    }
                    create: {
                        args: Prisma.TeamsCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
                    }
                    createMany: {
                        args: Prisma.TeamsCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.TeamsDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
                    }
                    update: {
                        args: Prisma.TeamsUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
                    }
                    deleteMany: {
                        args: Prisma.TeamsDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.TeamsUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.TeamsUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
                    }
                    aggregate: {
                        args: Prisma.TeamsAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTeams>
                    }
                    groupBy: {
                        args: Prisma.TeamsGroupByArgs<ExtArgs>
                        result: $Utils.Optional<TeamsGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.TeamsCountArgs<ExtArgs>
                        result:
                            | $Utils.Optional<TeamsCountAggregateOutputType>
                            | number
                    }
                }
            }
            TournamentTeam: {
                payload: Prisma.$TournamentTeamPayload<ExtArgs>
                fields: Prisma.TournamentTeamFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.TournamentTeamFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.TournamentTeamFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>
                    }
                    findFirst: {
                        args: Prisma.TournamentTeamFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.TournamentTeamFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>
                    }
                    findMany: {
                        args: Prisma.TournamentTeamFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>[]
                    }
                    create: {
                        args: Prisma.TournamentTeamCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>
                    }
                    createMany: {
                        args: Prisma.TournamentTeamCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.TournamentTeamDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>
                    }
                    update: {
                        args: Prisma.TournamentTeamUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>
                    }
                    deleteMany: {
                        args: Prisma.TournamentTeamDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.TournamentTeamUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.TournamentTeamUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TournamentTeamPayload>
                    }
                    aggregate: {
                        args: Prisma.TournamentTeamAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTournamentTeam>
                    }
                    groupBy: {
                        args: Prisma.TournamentTeamGroupByArgs<ExtArgs>
                        result: $Utils.Optional<TournamentTeamGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.TournamentTeamCountArgs<ExtArgs>
                        result:
                            | $Utils.Optional<TournamentTeamCountAggregateOutputType>
                            | number
                    }
                }
            }
        }
    } & {
        other: {
            payload: any
            operations: {
                $executeRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[],
                    ]
                    result: any
                }
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]]
                    result: any
                }
                $queryRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[],
                    ]
                    result: any
                }
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]]
                    result: any
                }
            }
        }
    }
    export const defineExtension: $Extensions.ExtendsHook<
        'define',
        Prisma.TypeMapCb,
        $Extensions.DefaultArgs
    >
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
         * // Shorthand for `emit: 'stdout'`
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events only
         * log: [
         *   { emit: 'event', level: 'query' },
         *   { emit: 'event', level: 'info' },
         *   { emit: 'event', level: 'warn' }
         *   { emit: 'event', level: 'error' }
         * ]
         *
         * / Emit as events and log to stdout
         * og: [
         *  { emit: 'stdout', level: 'query' },
         *  { emit: 'stdout', level: 'info' },
         *  { emit: 'stdout', level: 'warn' }
         *  { emit: 'stdout', level: 'error' }
         *
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
         * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
         */
        adapter?: runtime.SqlDriverAdapterFactory | null
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
        tournament?: TournamentOmit
        participant?: ParticipantOmit
        teams?: TeamsOmit
        tournamentTeam?: TournamentTeamOmit
    }

    /* Types for Logging */
    export type LogLevel = 'info' | 'query' | 'warn' | 'error'
    export type LogDefinition = {
        level: LogLevel
        emit: 'stdout' | 'event'
    }

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

    export type GetLogType<T> = CheckIsLogLevel<
        T extends LogDefinition ? T['level'] : T
    >

    export type GetEvents<T extends any[]> =
        T extends Array<LogLevel | LogDefinition>
            ? GetLogType<T[number]>
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

    // tested in getLogLevel.test.ts
    export function getLogLevel(
        log: Array<LogLevel | LogDefinition>
    ): LogLevel | undefined

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<
        Prisma.DefaultPrismaClient,
        runtime.ITXClientDenyList
    >

    export type Datasource = {
        url?: string
    }

    /**
     * Count Types
     */

    /**
     * Count Type TournamentCountOutputType
     */

    export type TournamentCountOutputType = {
        TournamentTeam: number
    }

    export type TournamentCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        TournamentTeam?:
            | boolean
            | TournamentCountOutputTypeCountTournamentTeamArgs
    }

    // Custom InputTypes
    /**
     * TournamentCountOutputType without action
     */
    export type TournamentCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentCountOutputType
         */
        select?: TournamentCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * TournamentCountOutputType without action
     */
    export type TournamentCountOutputTypeCountTournamentTeamArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TournamentTeamWhereInput
    }

    /**
     * Count Type TeamsCountOutputType
     */

    export type TeamsCountOutputType = {
        participant: number
        TournamentTeam: number
    }

    export type TeamsCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        participant?: boolean | TeamsCountOutputTypeCountParticipantArgs
        TournamentTeam?: boolean | TeamsCountOutputTypeCountTournamentTeamArgs
    }

    // Custom InputTypes
    /**
     * TeamsCountOutputType without action
     */
    export type TeamsCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TeamsCountOutputType
         */
        select?: TeamsCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * TeamsCountOutputType without action
     */
    export type TeamsCountOutputTypeCountParticipantArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ParticipantWhereInput
    }

    /**
     * TeamsCountOutputType without action
     */
    export type TeamsCountOutputTypeCountTournamentTeamArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TournamentTeamWhereInput
    }

    /**
     * Models
     */

    /**
     * Model Tournament
     */

    export type AggregateTournament = {
        _count: TournamentCountAggregateOutputType | null
        _avg: TournamentAvgAggregateOutputType | null
        _sum: TournamentSumAggregateOutputType | null
        _min: TournamentMinAggregateOutputType | null
        _max: TournamentMaxAggregateOutputType | null
    }

    export type TournamentAvgAggregateOutputType = {
        id: number | null
    }

    export type TournamentSumAggregateOutputType = {
        id: number | null
    }

    export type TournamentMinAggregateOutputType = {
        id: number | null
        name: string | null
        format: string | null
        date: Date | null
        createdAt: Date | null
    }

    export type TournamentMaxAggregateOutputType = {
        id: number | null
        name: string | null
        format: string | null
        date: Date | null
        createdAt: Date | null
    }

    export type TournamentCountAggregateOutputType = {
        id: number
        name: number
        format: number
        date: number
        createdAt: number
        _all: number
    }

    export type TournamentAvgAggregateInputType = {
        id?: true
    }

    export type TournamentSumAggregateInputType = {
        id?: true
    }

    export type TournamentMinAggregateInputType = {
        id?: true
        name?: true
        format?: true
        date?: true
        createdAt?: true
    }

    export type TournamentMaxAggregateInputType = {
        id?: true
        name?: true
        format?: true
        date?: true
        createdAt?: true
    }

    export type TournamentCountAggregateInputType = {
        id?: true
        name?: true
        format?: true
        date?: true
        createdAt?: true
        _all?: true
    }

    export type TournamentAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Tournament to aggregate.
         */
        where?: TournamentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tournaments to fetch.
         */
        orderBy?:
            | TournamentOrderByWithRelationInput
            | TournamentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TournamentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tournaments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tournaments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Tournaments
         **/
        _count?: true | TournamentCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: TournamentAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: TournamentSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TournamentMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TournamentMaxAggregateInputType
    }

    export type GetTournamentAggregateType<T extends TournamentAggregateArgs> =
        {
            [P in keyof T & keyof AggregateTournament]: P extends
                | '_count'
                | 'count'
                ? T[P] extends true
                    ? number
                    : GetScalarType<T[P], AggregateTournament[P]>
                : GetScalarType<T[P], AggregateTournament[P]>
        }

    export type TournamentGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TournamentWhereInput
        orderBy?:
            | TournamentOrderByWithAggregationInput
            | TournamentOrderByWithAggregationInput[]
        by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
        having?: TournamentScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: TournamentCountAggregateInputType | true
        _avg?: TournamentAvgAggregateInputType
        _sum?: TournamentSumAggregateInputType
        _min?: TournamentMinAggregateInputType
        _max?: TournamentMaxAggregateInputType
    }

    export type TournamentGroupByOutputType = {
        id: number
        name: string
        format: string
        date: Date
        createdAt: Date
        _count: TournamentCountAggregateOutputType | null
        _avg: TournamentAvgAggregateOutputType | null
        _sum: TournamentSumAggregateOutputType | null
        _min: TournamentMinAggregateOutputType | null
        _max: TournamentMaxAggregateOutputType | null
    }

    type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<TournamentGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof TournamentGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  TournamentGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], TournamentGroupByOutputType[P]>
                }
            >
        >

    export type TournamentSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean
            name?: boolean
            format?: boolean
            date?: boolean
            createdAt?: boolean
            TournamentTeam?: boolean | Tournament$TournamentTeamArgs<ExtArgs>
            _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['tournament']
    >

    export type TournamentSelectScalar = {
        id?: boolean
        name?: boolean
        format?: boolean
        date?: boolean
        createdAt?: boolean
    }

    export type TournamentOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        'id' | 'name' | 'format' | 'date' | 'createdAt',
        ExtArgs['result']['tournament']
    >
    export type TournamentInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        TournamentTeam?: boolean | Tournament$TournamentTeamArgs<ExtArgs>
        _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
    }

    export type $TournamentPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'Tournament'
        objects: {
            TournamentTeam: Prisma.$TournamentTeamPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                name: string
                format: string
                date: Date
                createdAt: Date
            },
            ExtArgs['result']['tournament']
        >
        composites: {}
    }

    type TournamentGetPayload<
        S extends boolean | null | undefined | TournamentDefaultArgs,
    > = $Result.GetResult<Prisma.$TournamentPayload, S>

    type TournamentCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        TournamentFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: TournamentCountAggregateInputType | true
    }

    export interface TournamentDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['Tournament']
            meta: { name: 'Tournament' }
        }
        /**
         * Find zero or one Tournament that matches the filter.
         * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
         * @example
         * // Get one Tournament
         * const tournament = await prisma.tournament.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TournamentFindUniqueArgs>(
            args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
         * @example
         * // Get one Tournament
         * const tournament = await prisma.tournament.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(
            args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tournament that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
         * @example
         * // Get one Tournament
         * const tournament = await prisma.tournament.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TournamentFindFirstArgs>(
            args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tournament that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
         * @example
         * // Get one Tournament
         * const tournament = await prisma.tournament.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(
            args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tournaments that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tournaments
         * const tournaments = await prisma.tournament.findMany()
         *
         * // Get first 10 Tournaments
         * const tournaments = await prisma.tournament.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
         *
         */
        findMany<T extends TournamentFindManyArgs>(
            args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >

        /**
         * Create a Tournament.
         * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
         * @example
         * // Create one Tournament
         * const Tournament = await prisma.tournament.create({
         *   data: {
         *     // ... data to create a Tournament
         *   }
         * })
         *
         */
        create<T extends TournamentCreateArgs>(
            args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tournaments.
         * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
         * @example
         * // Create many Tournaments
         * const tournament = await prisma.tournament.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TournamentCreateManyArgs>(
            args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Tournament.
         * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
         * @example
         * // Delete one Tournament
         * const Tournament = await prisma.tournament.delete({
         *   where: {
         *     // ... filter to delete one Tournament
         *   }
         * })
         *
         */
        delete<T extends TournamentDeleteArgs>(
            args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tournament.
         * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
         * @example
         * // Update one Tournament
         * const tournament = await prisma.tournament.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TournamentUpdateArgs>(
            args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tournaments.
         * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
         * @example
         * // Delete a few Tournaments
         * const { count } = await prisma.tournament.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TournamentDeleteManyArgs>(
            args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tournaments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tournaments
         * const tournament = await prisma.tournament.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TournamentUpdateManyArgs>(
            args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Tournament.
         * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
         * @example
         * // Update or create a Tournament
         * const tournament = await prisma.tournament.upsert({
         *   create: {
         *     // ... data to create a Tournament
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tournament we want to update
         *   }
         * })
         */
        upsert<T extends TournamentUpsertArgs>(
            args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            $Result.GetResult<
                Prisma.$TournamentPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tournaments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
         * @example
         * // Count the number of Tournaments
         * const count = await prisma.tournament.count({
         *   where: {
         *     // ... the filter for the Tournaments we want to count
         *   }
         * })
         **/
        count<T extends TournamentCountArgs>(
            args?: Subset<T, TournamentCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<
                          T['select'],
                          TournamentCountAggregateOutputType
                      >
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tournament.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends TournamentAggregateArgs>(
            args: Subset<T, TournamentAggregateArgs>
        ): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

        /**
         * Group by Tournament.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentGroupByArgs} args - Group by arguments.
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
            T extends TournamentGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TournamentGroupByArgs['orderBy'] }
                : { orderBy?: TournamentGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetTournamentGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Tournament model
         */
        readonly fields: TournamentFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Tournament.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TournamentClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        TournamentTeam<T extends Tournament$TournamentTeamArgs<ExtArgs> = {}>(
            args?: Subset<T, Tournament$TournamentTeamArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$TournamentTeamPayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Tournament model
     */
    interface TournamentFieldRefs {
        readonly id: FieldRef<'Tournament', 'Int'>
        readonly name: FieldRef<'Tournament', 'String'>
        readonly format: FieldRef<'Tournament', 'String'>
        readonly date: FieldRef<'Tournament', 'DateTime'>
        readonly createdAt: FieldRef<'Tournament', 'DateTime'>
    }

    // Custom InputTypes
    /**
     * Tournament findUnique
     */
    export type TournamentFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * Filter, which Tournament to fetch.
         */
        where: TournamentWhereUniqueInput
    }

    /**
     * Tournament findUniqueOrThrow
     */
    export type TournamentFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * Filter, which Tournament to fetch.
         */
        where: TournamentWhereUniqueInput
    }

    /**
     * Tournament findFirst
     */
    export type TournamentFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * Filter, which Tournament to fetch.
         */
        where?: TournamentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tournaments to fetch.
         */
        orderBy?:
            | TournamentOrderByWithRelationInput
            | TournamentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tournaments.
         */
        cursor?: TournamentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tournaments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tournaments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tournaments.
         */
        distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
    }

    /**
     * Tournament findFirstOrThrow
     */
    export type TournamentFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * Filter, which Tournament to fetch.
         */
        where?: TournamentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tournaments to fetch.
         */
        orderBy?:
            | TournamentOrderByWithRelationInput
            | TournamentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tournaments.
         */
        cursor?: TournamentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tournaments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tournaments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tournaments.
         */
        distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
    }

    /**
     * Tournament findMany
     */
    export type TournamentFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * Filter, which Tournaments to fetch.
         */
        where?: TournamentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tournaments to fetch.
         */
        orderBy?:
            | TournamentOrderByWithRelationInput
            | TournamentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Tournaments.
         */
        cursor?: TournamentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tournaments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tournaments.
         */
        skip?: number
        distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
    }

    /**
     * Tournament create
     */
    export type TournamentCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * The data needed to create a Tournament.
         */
        data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    }

    /**
     * Tournament createMany
     */
    export type TournamentCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Tournaments.
         */
        data: TournamentCreateManyInput | TournamentCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Tournament update
     */
    export type TournamentUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * The data needed to update a Tournament.
         */
        data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
        /**
         * Choose, which Tournament to update.
         */
        where: TournamentWhereUniqueInput
    }

    /**
     * Tournament updateMany
     */
    export type TournamentUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Tournaments.
         */
        data: XOR<
            TournamentUpdateManyMutationInput,
            TournamentUncheckedUpdateManyInput
        >
        /**
         * Filter which Tournaments to update
         */
        where?: TournamentWhereInput
        /**
         * Limit how many Tournaments to update.
         */
        limit?: number
    }

    /**
     * Tournament upsert
     */
    export type TournamentUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * The filter to search for the Tournament to update in case it exists.
         */
        where: TournamentWhereUniqueInput
        /**
         * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
         */
        create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
        /**
         * In case the Tournament was found with the provided `where` argument, update it with this data.
         */
        update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    }

    /**
     * Tournament delete
     */
    export type TournamentDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
        /**
         * Filter which Tournament to delete.
         */
        where: TournamentWhereUniqueInput
    }

    /**
     * Tournament deleteMany
     */
    export type TournamentDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Tournaments to delete
         */
        where?: TournamentWhereInput
        /**
         * Limit how many Tournaments to delete.
         */
        limit?: number
    }

    /**
     * Tournament.TournamentTeam
     */
    export type Tournament$TournamentTeamArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        where?: TournamentTeamWhereInput
        orderBy?:
            | TournamentTeamOrderByWithRelationInput
            | TournamentTeamOrderByWithRelationInput[]
        cursor?: TournamentTeamWhereUniqueInput
        take?: number
        skip?: number
        distinct?:
            | TournamentTeamScalarFieldEnum
            | TournamentTeamScalarFieldEnum[]
    }

    /**
     * Tournament without action
     */
    export type TournamentDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tournament
         */
        select?: TournamentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tournament
         */
        omit?: TournamentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentInclude<ExtArgs> | null
    }

    /**
     * Model Participant
     */

    export type AggregateParticipant = {
        _count: ParticipantCountAggregateOutputType | null
        _avg: ParticipantAvgAggregateOutputType | null
        _sum: ParticipantSumAggregateOutputType | null
        _min: ParticipantMinAggregateOutputType | null
        _max: ParticipantMaxAggregateOutputType | null
    }

    export type ParticipantAvgAggregateOutputType = {
        id: number | null
        teamId: number | null
    }

    export type ParticipantSumAggregateOutputType = {
        id: number | null
        teamId: number | null
    }

    export type ParticipantMinAggregateOutputType = {
        id: number | null
        name: string | null
        surname: string | null
        teamId: number | null
    }

    export type ParticipantMaxAggregateOutputType = {
        id: number | null
        name: string | null
        surname: string | null
        teamId: number | null
    }

    export type ParticipantCountAggregateOutputType = {
        id: number
        name: number
        surname: number
        teamId: number
        _all: number
    }

    export type ParticipantAvgAggregateInputType = {
        id?: true
        teamId?: true
    }

    export type ParticipantSumAggregateInputType = {
        id?: true
        teamId?: true
    }

    export type ParticipantMinAggregateInputType = {
        id?: true
        name?: true
        surname?: true
        teamId?: true
    }

    export type ParticipantMaxAggregateInputType = {
        id?: true
        name?: true
        surname?: true
        teamId?: true
    }

    export type ParticipantCountAggregateInputType = {
        id?: true
        name?: true
        surname?: true
        teamId?: true
        _all?: true
    }

    export type ParticipantAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Participant to aggregate.
         */
        where?: ParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Participants to fetch.
         */
        orderBy?:
            | ParticipantOrderByWithRelationInput
            | ParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Participants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Participants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Participants
         **/
        _count?: true | ParticipantCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: ParticipantAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: ParticipantSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ParticipantMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ParticipantMaxAggregateInputType
    }

    export type GetParticipantAggregateType<
        T extends ParticipantAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateParticipant]: P extends
            | '_count'
            | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateParticipant[P]>
            : GetScalarType<T[P], AggregateParticipant[P]>
    }

    export type ParticipantGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ParticipantWhereInput
        orderBy?:
            | ParticipantOrderByWithAggregationInput
            | ParticipantOrderByWithAggregationInput[]
        by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
        having?: ParticipantScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ParticipantCountAggregateInputType | true
        _avg?: ParticipantAvgAggregateInputType
        _sum?: ParticipantSumAggregateInputType
        _min?: ParticipantMinAggregateInputType
        _max?: ParticipantMaxAggregateInputType
    }

    export type ParticipantGroupByOutputType = {
        id: number
        name: string
        surname: string
        teamId: number
        _count: ParticipantCountAggregateOutputType | null
        _avg: ParticipantAvgAggregateOutputType | null
        _sum: ParticipantSumAggregateOutputType | null
        _min: ParticipantMinAggregateOutputType | null
        _max: ParticipantMaxAggregateOutputType | null
    }

    type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<ParticipantGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof ParticipantGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  ParticipantGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
                }
            >
        >

    export type ParticipantSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean
            name?: boolean
            surname?: boolean
            teamId?: boolean
            team?: boolean | TeamsDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['participant']
    >

    export type ParticipantSelectScalar = {
        id?: boolean
        name?: boolean
        surname?: boolean
        teamId?: boolean
    }

    export type ParticipantOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        'id' | 'name' | 'surname' | 'teamId',
        ExtArgs['result']['participant']
    >
    export type ParticipantInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        team?: boolean | TeamsDefaultArgs<ExtArgs>
    }

    export type $ParticipantPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'Participant'
        objects: {
            team: Prisma.$TeamsPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                name: string
                surname: string
                teamId: number
            },
            ExtArgs['result']['participant']
        >
        composites: {}
    }

    type ParticipantGetPayload<
        S extends boolean | null | undefined | ParticipantDefaultArgs,
    > = $Result.GetResult<Prisma.$ParticipantPayload, S>

    type ParticipantCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        ParticipantFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: ParticipantCountAggregateInputType | true
    }

    export interface ParticipantDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['Participant']
            meta: { name: 'Participant' }
        }
        /**
         * Find zero or one Participant that matches the filter.
         * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
         * @example
         * // Get one Participant
         * const participant = await prisma.participant.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ParticipantFindUniqueArgs>(
            args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
         * @example
         * // Get one Participant
         * const participant = await prisma.participant.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Participant that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
         * @example
         * // Get one Participant
         * const participant = await prisma.participant.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ParticipantFindFirstArgs>(
            args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Participant that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
         * @example
         * // Get one Participant
         * const participant = await prisma.participant.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Participants that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Participants
         * const participants = await prisma.participant.findMany()
         *
         * // Get first 10 Participants
         * const participants = await prisma.participant.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ParticipantFindManyArgs>(
            args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >

        /**
         * Create a Participant.
         * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
         * @example
         * // Create one Participant
         * const Participant = await prisma.participant.create({
         *   data: {
         *     // ... data to create a Participant
         *   }
         * })
         *
         */
        create<T extends ParticipantCreateArgs>(
            args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Participants.
         * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
         * @example
         * // Create many Participants
         * const participant = await prisma.participant.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ParticipantCreateManyArgs>(
            args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Participant.
         * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
         * @example
         * // Delete one Participant
         * const Participant = await prisma.participant.delete({
         *   where: {
         *     // ... filter to delete one Participant
         *   }
         * })
         *
         */
        delete<T extends ParticipantDeleteArgs>(
            args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Participant.
         * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
         * @example
         * // Update one Participant
         * const participant = await prisma.participant.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ParticipantUpdateArgs>(
            args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Participants.
         * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
         * @example
         * // Delete a few Participants
         * const { count } = await prisma.participant.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ParticipantDeleteManyArgs>(
            args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Participants.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Participants
         * const participant = await prisma.participant.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ParticipantUpdateManyArgs>(
            args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Participant.
         * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
         * @example
         * // Update or create a Participant
         * const participant = await prisma.participant.upsert({
         *   create: {
         *     // ... data to create a Participant
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Participant we want to update
         *   }
         * })
         */
        upsert<T extends ParticipantUpsertArgs>(
            args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>
        ): Prisma__ParticipantClient<
            $Result.GetResult<
                Prisma.$ParticipantPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Participants.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
         * @example
         * // Count the number of Participants
         * const count = await prisma.participant.count({
         *   where: {
         *     // ... the filter for the Participants we want to count
         *   }
         * })
         **/
        count<T extends ParticipantCountArgs>(
            args?: Subset<T, ParticipantCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<
                          T['select'],
                          ParticipantCountAggregateOutputType
                      >
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Participant.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ParticipantAggregateArgs>(
            args: Subset<T, ParticipantAggregateArgs>
        ): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

        /**
         * Group by Participant.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ParticipantGroupByArgs} args - Group by arguments.
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
            T extends ParticipantGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ParticipantGroupByArgs['orderBy'] }
                : { orderBy?: ParticipantGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetParticipantGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Participant model
         */
        readonly fields: ParticipantFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Participant.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ParticipantClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        team<T extends TeamsDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, TeamsDefaultArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            | $Result.GetResult<
                  Prisma.$TeamsPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Participant model
     */
    interface ParticipantFieldRefs {
        readonly id: FieldRef<'Participant', 'Int'>
        readonly name: FieldRef<'Participant', 'String'>
        readonly surname: FieldRef<'Participant', 'String'>
        readonly teamId: FieldRef<'Participant', 'Int'>
    }

    // Custom InputTypes
    /**
     * Participant findUnique
     */
    export type ParticipantFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * Filter, which Participant to fetch.
         */
        where: ParticipantWhereUniqueInput
    }

    /**
     * Participant findUniqueOrThrow
     */
    export type ParticipantFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * Filter, which Participant to fetch.
         */
        where: ParticipantWhereUniqueInput
    }

    /**
     * Participant findFirst
     */
    export type ParticipantFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * Filter, which Participant to fetch.
         */
        where?: ParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Participants to fetch.
         */
        orderBy?:
            | ParticipantOrderByWithRelationInput
            | ParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Participants.
         */
        cursor?: ParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Participants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Participants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Participants.
         */
        distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
    }

    /**
     * Participant findFirstOrThrow
     */
    export type ParticipantFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * Filter, which Participant to fetch.
         */
        where?: ParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Participants to fetch.
         */
        orderBy?:
            | ParticipantOrderByWithRelationInput
            | ParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Participants.
         */
        cursor?: ParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Participants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Participants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Participants.
         */
        distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
    }

    /**
     * Participant findMany
     */
    export type ParticipantFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * Filter, which Participants to fetch.
         */
        where?: ParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Participants to fetch.
         */
        orderBy?:
            | ParticipantOrderByWithRelationInput
            | ParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Participants.
         */
        cursor?: ParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Participants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Participants.
         */
        skip?: number
        distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
    }

    /**
     * Participant create
     */
    export type ParticipantCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * The data needed to create a Participant.
         */
        data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    }

    /**
     * Participant createMany
     */
    export type ParticipantCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Participants.
         */
        data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Participant update
     */
    export type ParticipantUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * The data needed to update a Participant.
         */
        data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
        /**
         * Choose, which Participant to update.
         */
        where: ParticipantWhereUniqueInput
    }

    /**
     * Participant updateMany
     */
    export type ParticipantUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Participants.
         */
        data: XOR<
            ParticipantUpdateManyMutationInput,
            ParticipantUncheckedUpdateManyInput
        >
        /**
         * Filter which Participants to update
         */
        where?: ParticipantWhereInput
        /**
         * Limit how many Participants to update.
         */
        limit?: number
    }

    /**
     * Participant upsert
     */
    export type ParticipantUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * The filter to search for the Participant to update in case it exists.
         */
        where: ParticipantWhereUniqueInput
        /**
         * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
         */
        create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
        /**
         * In case the Participant was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    }

    /**
     * Participant delete
     */
    export type ParticipantDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        /**
         * Filter which Participant to delete.
         */
        where: ParticipantWhereUniqueInput
    }

    /**
     * Participant deleteMany
     */
    export type ParticipantDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Participants to delete
         */
        where?: ParticipantWhereInput
        /**
         * Limit how many Participants to delete.
         */
        limit?: number
    }

    /**
     * Participant without action
     */
    export type ParticipantDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
    }

    /**
     * Model Teams
     */

    export type AggregateTeams = {
        _count: TeamsCountAggregateOutputType | null
        _avg: TeamsAvgAggregateOutputType | null
        _sum: TeamsSumAggregateOutputType | null
        _min: TeamsMinAggregateOutputType | null
        _max: TeamsMaxAggregateOutputType | null
    }

    export type TeamsAvgAggregateOutputType = {
        id: number | null
    }

    export type TeamsSumAggregateOutputType = {
        id: number | null
    }

    export type TeamsMinAggregateOutputType = {
        id: number | null
        name: string | null
    }

    export type TeamsMaxAggregateOutputType = {
        id: number | null
        name: string | null
    }

    export type TeamsCountAggregateOutputType = {
        id: number
        name: number
        _all: number
    }

    export type TeamsAvgAggregateInputType = {
        id?: true
    }

    export type TeamsSumAggregateInputType = {
        id?: true
    }

    export type TeamsMinAggregateInputType = {
        id?: true
        name?: true
    }

    export type TeamsMaxAggregateInputType = {
        id?: true
        name?: true
    }

    export type TeamsCountAggregateInputType = {
        id?: true
        name?: true
        _all?: true
    }

    export type TeamsAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Teams to aggregate.
         */
        where?: TeamsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?:
            | TeamsOrderByWithRelationInput
            | TeamsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TeamsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Teams
         **/
        _count?: true | TeamsCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: TeamsAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: TeamsSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TeamsMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TeamsMaxAggregateInputType
    }

    export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTeams[P]>
            : GetScalarType<T[P], AggregateTeams[P]>
    }

    export type TeamsGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TeamsWhereInput
        orderBy?:
            | TeamsOrderByWithAggregationInput
            | TeamsOrderByWithAggregationInput[]
        by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
        having?: TeamsScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: TeamsCountAggregateInputType | true
        _avg?: TeamsAvgAggregateInputType
        _sum?: TeamsSumAggregateInputType
        _min?: TeamsMinAggregateInputType
        _max?: TeamsMaxAggregateInputType
    }

    export type TeamsGroupByOutputType = {
        id: number
        name: string
        _count: TeamsCountAggregateOutputType | null
        _avg: TeamsAvgAggregateOutputType | null
        _sum: TeamsSumAggregateOutputType | null
        _min: TeamsMinAggregateOutputType | null
        _max: TeamsMaxAggregateOutputType | null
    }

    type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<TeamsGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof TeamsGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
                        : GetScalarType<T[P], TeamsGroupByOutputType[P]>
                }
            >
        >

    export type TeamsSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean
            name?: boolean
            participant?: boolean | Teams$participantArgs<ExtArgs>
            TournamentTeam?: boolean | Teams$TournamentTeamArgs<ExtArgs>
            _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['teams']
    >

    export type TeamsSelectScalar = {
        id?: boolean
        name?: boolean
    }

    export type TeamsOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['teams']>
    export type TeamsInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        participant?: boolean | Teams$participantArgs<ExtArgs>
        TournamentTeam?: boolean | Teams$TournamentTeamArgs<ExtArgs>
        _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
    }

    export type $TeamsPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'Teams'
        objects: {
            participant: Prisma.$ParticipantPayload<ExtArgs>[]
            TournamentTeam: Prisma.$TournamentTeamPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                name: string
            },
            ExtArgs['result']['teams']
        >
        composites: {}
    }

    type TeamsGetPayload<
        S extends boolean | null | undefined | TeamsDefaultArgs,
    > = $Result.GetResult<Prisma.$TeamsPayload, S>

    type TeamsCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: TeamsCountAggregateInputType | true
    }

    export interface TeamsDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['Teams']
            meta: { name: 'Teams' }
        }
        /**
         * Find zero or one Teams that matches the filter.
         * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
         * @example
         * // Get one Teams
         * const teams = await prisma.teams.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TeamsFindUniqueArgs>(
            args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
         * @example
         * // Get one Teams
         * const teams = await prisma.teams.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(
            args: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Teams that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
         * @example
         * // Get one Teams
         * const teams = await prisma.teams.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TeamsFindFirstArgs>(
            args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Teams that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
         * @example
         * // Get one Teams
         * const teams = await prisma.teams.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(
            args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Teams that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Teams
         * const teams = await prisma.teams.findMany()
         *
         * // Get first 10 Teams
         * const teams = await prisma.teams.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
         *
         */
        findMany<T extends TeamsFindManyArgs>(
            args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >

        /**
         * Create a Teams.
         * @param {TeamsCreateArgs} args - Arguments to create a Teams.
         * @example
         * // Create one Teams
         * const Teams = await prisma.teams.create({
         *   data: {
         *     // ... data to create a Teams
         *   }
         * })
         *
         */
        create<T extends TeamsCreateArgs>(
            args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Teams.
         * @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
         * @example
         * // Create many Teams
         * const teams = await prisma.teams.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TeamsCreateManyArgs>(
            args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Teams.
         * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
         * @example
         * // Delete one Teams
         * const Teams = await prisma.teams.delete({
         *   where: {
         *     // ... filter to delete one Teams
         *   }
         * })
         *
         */
        delete<T extends TeamsDeleteArgs>(
            args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Teams.
         * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
         * @example
         * // Update one Teams
         * const teams = await prisma.teams.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TeamsUpdateArgs>(
            args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Teams.
         * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
         * @example
         * // Delete a few Teams
         * const { count } = await prisma.teams.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TeamsDeleteManyArgs>(
            args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Teams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Teams
         * const teams = await prisma.teams.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TeamsUpdateManyArgs>(
            args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Teams.
         * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
         * @example
         * // Update or create a Teams
         * const teams = await prisma.teams.upsert({
         *   create: {
         *     // ... data to create a Teams
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Teams we want to update
         *   }
         * })
         */
        upsert<T extends TeamsUpsertArgs>(
            args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            $Result.GetResult<
                Prisma.$TeamsPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Teams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
         * @example
         * // Count the number of Teams
         * const count = await prisma.teams.count({
         *   where: {
         *     // ... the filter for the Teams we want to count
         *   }
         * })
         **/
        count<T extends TeamsCountArgs>(
            args?: Subset<T, TeamsCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], TeamsCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Teams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends TeamsAggregateArgs>(
            args: Subset<T, TeamsAggregateArgs>
        ): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

        /**
         * Group by Teams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamsGroupByArgs} args - Group by arguments.
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
            T extends TeamsGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TeamsGroupByArgs['orderBy'] }
                : { orderBy?: TeamsGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetTeamsGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Teams model
         */
        readonly fields: TeamsFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Teams.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TeamsClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        participant<T extends Teams$participantArgs<ExtArgs> = {}>(
            args?: Subset<T, Teams$participantArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ParticipantPayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >
        TournamentTeam<T extends Teams$TournamentTeamArgs<ExtArgs> = {}>(
            args?: Subset<T, Teams$TournamentTeamArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$TournamentTeamPayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Teams model
     */
    interface TeamsFieldRefs {
        readonly id: FieldRef<'Teams', 'Int'>
        readonly name: FieldRef<'Teams', 'String'>
    }

    // Custom InputTypes
    /**
     * Teams findUnique
     */
    export type TeamsFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * Filter, which Teams to fetch.
         */
        where: TeamsWhereUniqueInput
    }

    /**
     * Teams findUniqueOrThrow
     */
    export type TeamsFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * Filter, which Teams to fetch.
         */
        where: TeamsWhereUniqueInput
    }

    /**
     * Teams findFirst
     */
    export type TeamsFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * Filter, which Teams to fetch.
         */
        where?: TeamsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?:
            | TeamsOrderByWithRelationInput
            | TeamsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Teams.
         */
        cursor?: TeamsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Teams.
         */
        distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
    }

    /**
     * Teams findFirstOrThrow
     */
    export type TeamsFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * Filter, which Teams to fetch.
         */
        where?: TeamsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?:
            | TeamsOrderByWithRelationInput
            | TeamsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Teams.
         */
        cursor?: TeamsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Teams.
         */
        distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
    }

    /**
     * Teams findMany
     */
    export type TeamsFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * Filter, which Teams to fetch.
         */
        where?: TeamsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?:
            | TeamsOrderByWithRelationInput
            | TeamsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Teams.
         */
        cursor?: TeamsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number
        distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
    }

    /**
     * Teams create
     */
    export type TeamsCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * The data needed to create a Teams.
         */
        data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    }

    /**
     * Teams createMany
     */
    export type TeamsCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Teams.
         */
        data: TeamsCreateManyInput | TeamsCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Teams update
     */
    export type TeamsUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * The data needed to update a Teams.
         */
        data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
        /**
         * Choose, which Teams to update.
         */
        where: TeamsWhereUniqueInput
    }

    /**
     * Teams updateMany
     */
    export type TeamsUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Teams.
         */
        data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
        /**
         * Filter which Teams to update
         */
        where?: TeamsWhereInput
        /**
         * Limit how many Teams to update.
         */
        limit?: number
    }

    /**
     * Teams upsert
     */
    export type TeamsUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * The filter to search for the Teams to update in case it exists.
         */
        where: TeamsWhereUniqueInput
        /**
         * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
         */
        create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
        /**
         * In case the Teams was found with the provided `where` argument, update it with this data.
         */
        update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    }

    /**
     * Teams delete
     */
    export type TeamsDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
        /**
         * Filter which Teams to delete.
         */
        where: TeamsWhereUniqueInput
    }

    /**
     * Teams deleteMany
     */
    export type TeamsDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Teams to delete
         */
        where?: TeamsWhereInput
        /**
         * Limit how many Teams to delete.
         */
        limit?: number
    }

    /**
     * Teams.participant
     */
    export type Teams$participantArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Participant
         */
        select?: ParticipantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Participant
         */
        omit?: ParticipantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ParticipantInclude<ExtArgs> | null
        where?: ParticipantWhereInput
        orderBy?:
            | ParticipantOrderByWithRelationInput
            | ParticipantOrderByWithRelationInput[]
        cursor?: ParticipantWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
    }

    /**
     * Teams.TournamentTeam
     */
    export type Teams$TournamentTeamArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        where?: TournamentTeamWhereInput
        orderBy?:
            | TournamentTeamOrderByWithRelationInput
            | TournamentTeamOrderByWithRelationInput[]
        cursor?: TournamentTeamWhereUniqueInput
        take?: number
        skip?: number
        distinct?:
            | TournamentTeamScalarFieldEnum
            | TournamentTeamScalarFieldEnum[]
    }

    /**
     * Teams without action
     */
    export type TeamsDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Teams
         */
        select?: TeamsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Teams
         */
        omit?: TeamsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamsInclude<ExtArgs> | null
    }

    /**
     * Model TournamentTeam
     */

    export type AggregateTournamentTeam = {
        _count: TournamentTeamCountAggregateOutputType | null
        _avg: TournamentTeamAvgAggregateOutputType | null
        _sum: TournamentTeamSumAggregateOutputType | null
        _min: TournamentTeamMinAggregateOutputType | null
        _max: TournamentTeamMaxAggregateOutputType | null
    }

    export type TournamentTeamAvgAggregateOutputType = {
        tournamentId: number | null
        teamId: number | null
    }

    export type TournamentTeamSumAggregateOutputType = {
        tournamentId: number | null
        teamId: number | null
    }

    export type TournamentTeamMinAggregateOutputType = {
        tournamentId: number | null
        teamId: number | null
    }

    export type TournamentTeamMaxAggregateOutputType = {
        tournamentId: number | null
        teamId: number | null
    }

    export type TournamentTeamCountAggregateOutputType = {
        tournamentId: number
        teamId: number
        _all: number
    }

    export type TournamentTeamAvgAggregateInputType = {
        tournamentId?: true
        teamId?: true
    }

    export type TournamentTeamSumAggregateInputType = {
        tournamentId?: true
        teamId?: true
    }

    export type TournamentTeamMinAggregateInputType = {
        tournamentId?: true
        teamId?: true
    }

    export type TournamentTeamMaxAggregateInputType = {
        tournamentId?: true
        teamId?: true
    }

    export type TournamentTeamCountAggregateInputType = {
        tournamentId?: true
        teamId?: true
        _all?: true
    }

    export type TournamentTeamAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which TournamentTeam to aggregate.
         */
        where?: TournamentTeamWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of TournamentTeams to fetch.
         */
        orderBy?:
            | TournamentTeamOrderByWithRelationInput
            | TournamentTeamOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TournamentTeamWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` TournamentTeams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` TournamentTeams.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned TournamentTeams
         **/
        _count?: true | TournamentTeamCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: TournamentTeamAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: TournamentTeamSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TournamentTeamMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TournamentTeamMaxAggregateInputType
    }

    export type GetTournamentTeamAggregateType<
        T extends TournamentTeamAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateTournamentTeam]: P extends
            | '_count'
            | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTournamentTeam[P]>
            : GetScalarType<T[P], AggregateTournamentTeam[P]>
    }

    export type TournamentTeamGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TournamentTeamWhereInput
        orderBy?:
            | TournamentTeamOrderByWithAggregationInput
            | TournamentTeamOrderByWithAggregationInput[]
        by: TournamentTeamScalarFieldEnum[] | TournamentTeamScalarFieldEnum
        having?: TournamentTeamScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: TournamentTeamCountAggregateInputType | true
        _avg?: TournamentTeamAvgAggregateInputType
        _sum?: TournamentTeamSumAggregateInputType
        _min?: TournamentTeamMinAggregateInputType
        _max?: TournamentTeamMaxAggregateInputType
    }

    export type TournamentTeamGroupByOutputType = {
        tournamentId: number
        teamId: number
        _count: TournamentTeamCountAggregateOutputType | null
        _avg: TournamentTeamAvgAggregateOutputType | null
        _sum: TournamentTeamSumAggregateOutputType | null
        _min: TournamentTeamMinAggregateOutputType | null
        _max: TournamentTeamMaxAggregateOutputType | null
    }

    type GetTournamentTeamGroupByPayload<T extends TournamentTeamGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<TournamentTeamGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof TournamentTeamGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  TournamentTeamGroupByOutputType[P]
                              >
                        : GetScalarType<
                              T[P],
                              TournamentTeamGroupByOutputType[P]
                          >
                }
            >
        >

    export type TournamentTeamSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            tournamentId?: boolean
            teamId?: boolean
            tournament?: boolean | TournamentDefaultArgs<ExtArgs>
            team?: boolean | TeamsDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['tournamentTeam']
    >

    export type TournamentTeamSelectScalar = {
        tournamentId?: boolean
        teamId?: boolean
    }

    export type TournamentTeamOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        'tournamentId' | 'teamId',
        ExtArgs['result']['tournamentTeam']
    >
    export type TournamentTeamInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        tournament?: boolean | TournamentDefaultArgs<ExtArgs>
        team?: boolean | TeamsDefaultArgs<ExtArgs>
    }

    export type $TournamentTeamPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'TournamentTeam'
        objects: {
            tournament: Prisma.$TournamentPayload<ExtArgs>
            team: Prisma.$TeamsPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<
            {
                tournamentId: number
                teamId: number
            },
            ExtArgs['result']['tournamentTeam']
        >
        composites: {}
    }

    type TournamentTeamGetPayload<
        S extends boolean | null | undefined | TournamentTeamDefaultArgs,
    > = $Result.GetResult<Prisma.$TournamentTeamPayload, S>

    type TournamentTeamCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        TournamentTeamFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: TournamentTeamCountAggregateInputType | true
    }

    export interface TournamentTeamDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['TournamentTeam']
            meta: { name: 'TournamentTeam' }
        }
        /**
         * Find zero or one TournamentTeam that matches the filter.
         * @param {TournamentTeamFindUniqueArgs} args - Arguments to find a TournamentTeam
         * @example
         * // Get one TournamentTeam
         * const tournamentTeam = await prisma.tournamentTeam.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TournamentTeamFindUniqueArgs>(
            args: SelectSubset<T, TournamentTeamFindUniqueArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one TournamentTeam that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TournamentTeamFindUniqueOrThrowArgs} args - Arguments to find a TournamentTeam
         * @example
         * // Get one TournamentTeam
         * const tournamentTeam = await prisma.tournamentTeam.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TournamentTeamFindUniqueOrThrowArgs>(
            args: SelectSubset<T, TournamentTeamFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first TournamentTeam that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamFindFirstArgs} args - Arguments to find a TournamentTeam
         * @example
         * // Get one TournamentTeam
         * const tournamentTeam = await prisma.tournamentTeam.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TournamentTeamFindFirstArgs>(
            args?: SelectSubset<T, TournamentTeamFindFirstArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first TournamentTeam that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamFindFirstOrThrowArgs} args - Arguments to find a TournamentTeam
         * @example
         * // Get one TournamentTeam
         * const tournamentTeam = await prisma.tournamentTeam.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TournamentTeamFindFirstOrThrowArgs>(
            args?: SelectSubset<T, TournamentTeamFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more TournamentTeams that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all TournamentTeams
         * const tournamentTeams = await prisma.tournamentTeam.findMany()
         *
         * // Get first 10 TournamentTeams
         * const tournamentTeams = await prisma.tournamentTeam.findMany({ take: 10 })
         *
         * // Only select the `tournamentId`
         * const tournamentTeamWithTournamentIdOnly = await prisma.tournamentTeam.findMany({ select: { tournamentId: true } })
         *
         */
        findMany<T extends TournamentTeamFindManyArgs>(
            args?: SelectSubset<T, TournamentTeamFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >

        /**
         * Create a TournamentTeam.
         * @param {TournamentTeamCreateArgs} args - Arguments to create a TournamentTeam.
         * @example
         * // Create one TournamentTeam
         * const TournamentTeam = await prisma.tournamentTeam.create({
         *   data: {
         *     // ... data to create a TournamentTeam
         *   }
         * })
         *
         */
        create<T extends TournamentTeamCreateArgs>(
            args: SelectSubset<T, TournamentTeamCreateArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many TournamentTeams.
         * @param {TournamentTeamCreateManyArgs} args - Arguments to create many TournamentTeams.
         * @example
         * // Create many TournamentTeams
         * const tournamentTeam = await prisma.tournamentTeam.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TournamentTeamCreateManyArgs>(
            args?: SelectSubset<T, TournamentTeamCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a TournamentTeam.
         * @param {TournamentTeamDeleteArgs} args - Arguments to delete one TournamentTeam.
         * @example
         * // Delete one TournamentTeam
         * const TournamentTeam = await prisma.tournamentTeam.delete({
         *   where: {
         *     // ... filter to delete one TournamentTeam
         *   }
         * })
         *
         */
        delete<T extends TournamentTeamDeleteArgs>(
            args: SelectSubset<T, TournamentTeamDeleteArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one TournamentTeam.
         * @param {TournamentTeamUpdateArgs} args - Arguments to update one TournamentTeam.
         * @example
         * // Update one TournamentTeam
         * const tournamentTeam = await prisma.tournamentTeam.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TournamentTeamUpdateArgs>(
            args: SelectSubset<T, TournamentTeamUpdateArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more TournamentTeams.
         * @param {TournamentTeamDeleteManyArgs} args - Arguments to filter TournamentTeams to delete.
         * @example
         * // Delete a few TournamentTeams
         * const { count } = await prisma.tournamentTeam.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TournamentTeamDeleteManyArgs>(
            args?: SelectSubset<T, TournamentTeamDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more TournamentTeams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many TournamentTeams
         * const tournamentTeam = await prisma.tournamentTeam.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TournamentTeamUpdateManyArgs>(
            args: SelectSubset<T, TournamentTeamUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one TournamentTeam.
         * @param {TournamentTeamUpsertArgs} args - Arguments to update or create a TournamentTeam.
         * @example
         * // Update or create a TournamentTeam
         * const tournamentTeam = await prisma.tournamentTeam.upsert({
         *   create: {
         *     // ... data to create a TournamentTeam
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the TournamentTeam we want to update
         *   }
         * })
         */
        upsert<T extends TournamentTeamUpsertArgs>(
            args: SelectSubset<T, TournamentTeamUpsertArgs<ExtArgs>>
        ): Prisma__TournamentTeamClient<
            $Result.GetResult<
                Prisma.$TournamentTeamPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of TournamentTeams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamCountArgs} args - Arguments to filter TournamentTeams to count.
         * @example
         * // Count the number of TournamentTeams
         * const count = await prisma.tournamentTeam.count({
         *   where: {
         *     // ... the filter for the TournamentTeams we want to count
         *   }
         * })
         **/
        count<T extends TournamentTeamCountArgs>(
            args?: Subset<T, TournamentTeamCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<
                          T['select'],
                          TournamentTeamCountAggregateOutputType
                      >
                : number
        >

        /**
         * Allows you to perform aggregations operations on a TournamentTeam.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends TournamentTeamAggregateArgs>(
            args: Subset<T, TournamentTeamAggregateArgs>
        ): Prisma.PrismaPromise<GetTournamentTeamAggregateType<T>>

        /**
         * Group by TournamentTeam.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TournamentTeamGroupByArgs} args - Group by arguments.
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
            T extends TournamentTeamGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TournamentTeamGroupByArgs['orderBy'] }
                : { orderBy?: TournamentTeamGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, TournamentTeamGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetTournamentTeamGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the TournamentTeam model
         */
        readonly fields: TournamentTeamFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for TournamentTeam.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TournamentTeamClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, TournamentDefaultArgs<ExtArgs>>
        ): Prisma__TournamentClient<
            | $Result.GetResult<
                  Prisma.$TournamentPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        team<T extends TeamsDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, TeamsDefaultArgs<ExtArgs>>
        ): Prisma__TeamsClient<
            | $Result.GetResult<
                  Prisma.$TeamsPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>
    }

    /**
     * Fields of the TournamentTeam model
     */
    interface TournamentTeamFieldRefs {
        readonly tournamentId: FieldRef<'TournamentTeam', 'Int'>
        readonly teamId: FieldRef<'TournamentTeam', 'Int'>
    }

    // Custom InputTypes
    /**
     * TournamentTeam findUnique
     */
    export type TournamentTeamFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * Filter, which TournamentTeam to fetch.
         */
        where: TournamentTeamWhereUniqueInput
    }

    /**
     * TournamentTeam findUniqueOrThrow
     */
    export type TournamentTeamFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * Filter, which TournamentTeam to fetch.
         */
        where: TournamentTeamWhereUniqueInput
    }

    /**
     * TournamentTeam findFirst
     */
    export type TournamentTeamFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * Filter, which TournamentTeam to fetch.
         */
        where?: TournamentTeamWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of TournamentTeams to fetch.
         */
        orderBy?:
            | TournamentTeamOrderByWithRelationInput
            | TournamentTeamOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for TournamentTeams.
         */
        cursor?: TournamentTeamWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` TournamentTeams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` TournamentTeams.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of TournamentTeams.
         */
        distinct?:
            | TournamentTeamScalarFieldEnum
            | TournamentTeamScalarFieldEnum[]
    }

    /**
     * TournamentTeam findFirstOrThrow
     */
    export type TournamentTeamFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * Filter, which TournamentTeam to fetch.
         */
        where?: TournamentTeamWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of TournamentTeams to fetch.
         */
        orderBy?:
            | TournamentTeamOrderByWithRelationInput
            | TournamentTeamOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for TournamentTeams.
         */
        cursor?: TournamentTeamWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` TournamentTeams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` TournamentTeams.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of TournamentTeams.
         */
        distinct?:
            | TournamentTeamScalarFieldEnum
            | TournamentTeamScalarFieldEnum[]
    }

    /**
     * TournamentTeam findMany
     */
    export type TournamentTeamFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * Filter, which TournamentTeams to fetch.
         */
        where?: TournamentTeamWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of TournamentTeams to fetch.
         */
        orderBy?:
            | TournamentTeamOrderByWithRelationInput
            | TournamentTeamOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing TournamentTeams.
         */
        cursor?: TournamentTeamWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` TournamentTeams from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` TournamentTeams.
         */
        skip?: number
        distinct?:
            | TournamentTeamScalarFieldEnum
            | TournamentTeamScalarFieldEnum[]
    }

    /**
     * TournamentTeam create
     */
    export type TournamentTeamCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * The data needed to create a TournamentTeam.
         */
        data: XOR<TournamentTeamCreateInput, TournamentTeamUncheckedCreateInput>
    }

    /**
     * TournamentTeam createMany
     */
    export type TournamentTeamCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many TournamentTeams.
         */
        data: TournamentTeamCreateManyInput | TournamentTeamCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * TournamentTeam update
     */
    export type TournamentTeamUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * The data needed to update a TournamentTeam.
         */
        data: XOR<TournamentTeamUpdateInput, TournamentTeamUncheckedUpdateInput>
        /**
         * Choose, which TournamentTeam to update.
         */
        where: TournamentTeamWhereUniqueInput
    }

    /**
     * TournamentTeam updateMany
     */
    export type TournamentTeamUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update TournamentTeams.
         */
        data: XOR<
            TournamentTeamUpdateManyMutationInput,
            TournamentTeamUncheckedUpdateManyInput
        >
        /**
         * Filter which TournamentTeams to update
         */
        where?: TournamentTeamWhereInput
        /**
         * Limit how many TournamentTeams to update.
         */
        limit?: number
    }

    /**
     * TournamentTeam upsert
     */
    export type TournamentTeamUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * The filter to search for the TournamentTeam to update in case it exists.
         */
        where: TournamentTeamWhereUniqueInput
        /**
         * In case the TournamentTeam found by the `where` argument doesn't exist, create a new TournamentTeam with this data.
         */
        create: XOR<
            TournamentTeamCreateInput,
            TournamentTeamUncheckedCreateInput
        >
        /**
         * In case the TournamentTeam was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            TournamentTeamUpdateInput,
            TournamentTeamUncheckedUpdateInput
        >
    }

    /**
     * TournamentTeam delete
     */
    export type TournamentTeamDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
        /**
         * Filter which TournamentTeam to delete.
         */
        where: TournamentTeamWhereUniqueInput
    }

    /**
     * TournamentTeam deleteMany
     */
    export type TournamentTeamDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which TournamentTeams to delete
         */
        where?: TournamentTeamWhereInput
        /**
         * Limit how many TournamentTeams to delete.
         */
        limit?: number
    }

    /**
     * TournamentTeam without action
     */
    export type TournamentTeamDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TournamentTeam
         */
        select?: TournamentTeamSelect<ExtArgs> | null
        /**
         * Omit specific fields from the TournamentTeam
         */
        omit?: TournamentTeamOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TournamentTeamInclude<ExtArgs> | null
    }

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted'
        ReadCommitted: 'ReadCommitted'
        RepeatableRead: 'RepeatableRead'
        Serializable: 'Serializable'
    }

    export type TransactionIsolationLevel =
        (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

    export const TournamentScalarFieldEnum: {
        id: 'id'
        name: 'name'
        format: 'format'
        date: 'date'
        createdAt: 'createdAt'
    }

    export type TournamentScalarFieldEnum =
        (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]

    export const ParticipantScalarFieldEnum: {
        id: 'id'
        name: 'name'
        surname: 'surname'
        teamId: 'teamId'
    }

    export type ParticipantScalarFieldEnum =
        (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]

    export const TeamsScalarFieldEnum: {
        id: 'id'
        name: 'name'
    }

    export type TeamsScalarFieldEnum =
        (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]

    export const TournamentTeamScalarFieldEnum: {
        tournamentId: 'tournamentId'
        teamId: 'teamId'
    }

    export type TournamentTeamScalarFieldEnum =
        (typeof TournamentTeamScalarFieldEnum)[keyof typeof TournamentTeamScalarFieldEnum]

    export const SortOrder: {
        asc: 'asc'
        desc: 'desc'
    }

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

    export const TournamentOrderByRelevanceFieldEnum: {
        name: 'name'
        format: 'format'
    }

    export type TournamentOrderByRelevanceFieldEnum =
        (typeof TournamentOrderByRelevanceFieldEnum)[keyof typeof TournamentOrderByRelevanceFieldEnum]

    export const ParticipantOrderByRelevanceFieldEnum: {
        name: 'name'
        surname: 'surname'
    }

    export type ParticipantOrderByRelevanceFieldEnum =
        (typeof ParticipantOrderByRelevanceFieldEnum)[keyof typeof ParticipantOrderByRelevanceFieldEnum]

    export const TeamsOrderByRelevanceFieldEnum: {
        name: 'name'
    }

    export type TeamsOrderByRelevanceFieldEnum =
        (typeof TeamsOrderByRelevanceFieldEnum)[keyof typeof TeamsOrderByRelevanceFieldEnum]

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Int'
    >

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'String'
    >

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'DateTime'
    >

    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Float'
    >

    /**
     * Deep Input Types
     */

    export type TournamentWhereInput = {
        AND?: TournamentWhereInput | TournamentWhereInput[]
        OR?: TournamentWhereInput[]
        NOT?: TournamentWhereInput | TournamentWhereInput[]
        id?: IntFilter<'Tournament'> | number
        name?: StringFilter<'Tournament'> | string
        format?: StringFilter<'Tournament'> | string
        date?: DateTimeFilter<'Tournament'> | Date | string
        createdAt?: DateTimeFilter<'Tournament'> | Date | string
        TournamentTeam?: TournamentTeamListRelationFilter
    }

    export type TournamentOrderByWithRelationInput = {
        id?: SortOrder
        name?: SortOrder
        format?: SortOrder
        date?: SortOrder
        createdAt?: SortOrder
        TournamentTeam?: TournamentTeamOrderByRelationAggregateInput
        _relevance?: TournamentOrderByRelevanceInput
    }

    export type TournamentWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            AND?: TournamentWhereInput | TournamentWhereInput[]
            OR?: TournamentWhereInput[]
            NOT?: TournamentWhereInput | TournamentWhereInput[]
            name?: StringFilter<'Tournament'> | string
            format?: StringFilter<'Tournament'> | string
            date?: DateTimeFilter<'Tournament'> | Date | string
            createdAt?: DateTimeFilter<'Tournament'> | Date | string
            TournamentTeam?: TournamentTeamListRelationFilter
        },
        'id'
    >

    export type TournamentOrderByWithAggregationInput = {
        id?: SortOrder
        name?: SortOrder
        format?: SortOrder
        date?: SortOrder
        createdAt?: SortOrder
        _count?: TournamentCountOrderByAggregateInput
        _avg?: TournamentAvgOrderByAggregateInput
        _max?: TournamentMaxOrderByAggregateInput
        _min?: TournamentMinOrderByAggregateInput
        _sum?: TournamentSumOrderByAggregateInput
    }

    export type TournamentScalarWhereWithAggregatesInput = {
        AND?:
            | TournamentScalarWhereWithAggregatesInput
            | TournamentScalarWhereWithAggregatesInput[]
        OR?: TournamentScalarWhereWithAggregatesInput[]
        NOT?:
            | TournamentScalarWhereWithAggregatesInput
            | TournamentScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Tournament'> | number
        name?: StringWithAggregatesFilter<'Tournament'> | string
        format?: StringWithAggregatesFilter<'Tournament'> | string
        date?: DateTimeWithAggregatesFilter<'Tournament'> | Date | string
        createdAt?: DateTimeWithAggregatesFilter<'Tournament'> | Date | string
    }

    export type ParticipantWhereInput = {
        AND?: ParticipantWhereInput | ParticipantWhereInput[]
        OR?: ParticipantWhereInput[]
        NOT?: ParticipantWhereInput | ParticipantWhereInput[]
        id?: IntFilter<'Participant'> | number
        name?: StringFilter<'Participant'> | string
        surname?: StringFilter<'Participant'> | string
        teamId?: IntFilter<'Participant'> | number
        team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    }

    export type ParticipantOrderByWithRelationInput = {
        id?: SortOrder
        name?: SortOrder
        surname?: SortOrder
        teamId?: SortOrder
        team?: TeamsOrderByWithRelationInput
        _relevance?: ParticipantOrderByRelevanceInput
    }

    export type ParticipantWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            AND?: ParticipantWhereInput | ParticipantWhereInput[]
            OR?: ParticipantWhereInput[]
            NOT?: ParticipantWhereInput | ParticipantWhereInput[]
            name?: StringFilter<'Participant'> | string
            surname?: StringFilter<'Participant'> | string
            teamId?: IntFilter<'Participant'> | number
            team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
        },
        'id'
    >

    export type ParticipantOrderByWithAggregationInput = {
        id?: SortOrder
        name?: SortOrder
        surname?: SortOrder
        teamId?: SortOrder
        _count?: ParticipantCountOrderByAggregateInput
        _avg?: ParticipantAvgOrderByAggregateInput
        _max?: ParticipantMaxOrderByAggregateInput
        _min?: ParticipantMinOrderByAggregateInput
        _sum?: ParticipantSumOrderByAggregateInput
    }

    export type ParticipantScalarWhereWithAggregatesInput = {
        AND?:
            | ParticipantScalarWhereWithAggregatesInput
            | ParticipantScalarWhereWithAggregatesInput[]
        OR?: ParticipantScalarWhereWithAggregatesInput[]
        NOT?:
            | ParticipantScalarWhereWithAggregatesInput
            | ParticipantScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Participant'> | number
        name?: StringWithAggregatesFilter<'Participant'> | string
        surname?: StringWithAggregatesFilter<'Participant'> | string
        teamId?: IntWithAggregatesFilter<'Participant'> | number
    }

    export type TeamsWhereInput = {
        AND?: TeamsWhereInput | TeamsWhereInput[]
        OR?: TeamsWhereInput[]
        NOT?: TeamsWhereInput | TeamsWhereInput[]
        id?: IntFilter<'Teams'> | number
        name?: StringFilter<'Teams'> | string
        participant?: ParticipantListRelationFilter
        TournamentTeam?: TournamentTeamListRelationFilter
    }

    export type TeamsOrderByWithRelationInput = {
        id?: SortOrder
        name?: SortOrder
        participant?: ParticipantOrderByRelationAggregateInput
        TournamentTeam?: TournamentTeamOrderByRelationAggregateInput
        _relevance?: TeamsOrderByRelevanceInput
    }

    export type TeamsWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            AND?: TeamsWhereInput | TeamsWhereInput[]
            OR?: TeamsWhereInput[]
            NOT?: TeamsWhereInput | TeamsWhereInput[]
            name?: StringFilter<'Teams'> | string
            participant?: ParticipantListRelationFilter
            TournamentTeam?: TournamentTeamListRelationFilter
        },
        'id'
    >

    export type TeamsOrderByWithAggregationInput = {
        id?: SortOrder
        name?: SortOrder
        _count?: TeamsCountOrderByAggregateInput
        _avg?: TeamsAvgOrderByAggregateInput
        _max?: TeamsMaxOrderByAggregateInput
        _min?: TeamsMinOrderByAggregateInput
        _sum?: TeamsSumOrderByAggregateInput
    }

    export type TeamsScalarWhereWithAggregatesInput = {
        AND?:
            | TeamsScalarWhereWithAggregatesInput
            | TeamsScalarWhereWithAggregatesInput[]
        OR?: TeamsScalarWhereWithAggregatesInput[]
        NOT?:
            | TeamsScalarWhereWithAggregatesInput
            | TeamsScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Teams'> | number
        name?: StringWithAggregatesFilter<'Teams'> | string
    }

    export type TournamentTeamWhereInput = {
        AND?: TournamentTeamWhereInput | TournamentTeamWhereInput[]
        OR?: TournamentTeamWhereInput[]
        NOT?: TournamentTeamWhereInput | TournamentTeamWhereInput[]
        tournamentId?: IntFilter<'TournamentTeam'> | number
        teamId?: IntFilter<'TournamentTeam'> | number
        tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
        team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    }

    export type TournamentTeamOrderByWithRelationInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
        tournament?: TournamentOrderByWithRelationInput
        team?: TeamsOrderByWithRelationInput
    }

    export type TournamentTeamWhereUniqueInput = Prisma.AtLeast<
        {
            tournamentId_teamId?: TournamentTeamTournamentIdTeamIdCompoundUniqueInput
            AND?: TournamentTeamWhereInput | TournamentTeamWhereInput[]
            OR?: TournamentTeamWhereInput[]
            NOT?: TournamentTeamWhereInput | TournamentTeamWhereInput[]
            tournamentId?: IntFilter<'TournamentTeam'> | number
            teamId?: IntFilter<'TournamentTeam'> | number
            tournament?: XOR<
                TournamentScalarRelationFilter,
                TournamentWhereInput
            >
            team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
        },
        'tournamentId_teamId'
    >

    export type TournamentTeamOrderByWithAggregationInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
        _count?: TournamentTeamCountOrderByAggregateInput
        _avg?: TournamentTeamAvgOrderByAggregateInput
        _max?: TournamentTeamMaxOrderByAggregateInput
        _min?: TournamentTeamMinOrderByAggregateInput
        _sum?: TournamentTeamSumOrderByAggregateInput
    }

    export type TournamentTeamScalarWhereWithAggregatesInput = {
        AND?:
            | TournamentTeamScalarWhereWithAggregatesInput
            | TournamentTeamScalarWhereWithAggregatesInput[]
        OR?: TournamentTeamScalarWhereWithAggregatesInput[]
        NOT?:
            | TournamentTeamScalarWhereWithAggregatesInput
            | TournamentTeamScalarWhereWithAggregatesInput[]
        tournamentId?: IntWithAggregatesFilter<'TournamentTeam'> | number
        teamId?: IntWithAggregatesFilter<'TournamentTeam'> | number
    }

    export type TournamentCreateInput = {
        name: string
        format: string
        date: Date | string
        createdAt?: Date | string
        TournamentTeam?: TournamentTeamCreateNestedManyWithoutTournamentInput
    }

    export type TournamentUncheckedCreateInput = {
        id?: number
        name: string
        format: string
        date: Date | string
        createdAt?: Date | string
        TournamentTeam?: TournamentTeamUncheckedCreateNestedManyWithoutTournamentInput
    }

    export type TournamentUpdateInput = {
        name?: StringFieldUpdateOperationsInput | string
        format?: StringFieldUpdateOperationsInput | string
        date?: DateTimeFieldUpdateOperationsInput | Date | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        TournamentTeam?: TournamentTeamUpdateManyWithoutTournamentNestedInput
    }

    export type TournamentUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        format?: StringFieldUpdateOperationsInput | string
        date?: DateTimeFieldUpdateOperationsInput | Date | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        TournamentTeam?: TournamentTeamUncheckedUpdateManyWithoutTournamentNestedInput
    }

    export type TournamentCreateManyInput = {
        id?: number
        name: string
        format: string
        date: Date | string
        createdAt?: Date | string
    }

    export type TournamentUpdateManyMutationInput = {
        name?: StringFieldUpdateOperationsInput | string
        format?: StringFieldUpdateOperationsInput | string
        date?: DateTimeFieldUpdateOperationsInput | Date | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type TournamentUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        format?: StringFieldUpdateOperationsInput | string
        date?: DateTimeFieldUpdateOperationsInput | Date | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type ParticipantCreateInput = {
        name: string
        surname: string
        team: TeamsCreateNestedOneWithoutParticipantInput
    }

    export type ParticipantUncheckedCreateInput = {
        id?: number
        name: string
        surname: string
        teamId: number
    }

    export type ParticipantUpdateInput = {
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
        team?: TeamsUpdateOneRequiredWithoutParticipantNestedInput
    }

    export type ParticipantUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
        teamId?: IntFieldUpdateOperationsInput | number
    }

    export type ParticipantCreateManyInput = {
        id?: number
        name: string
        surname: string
        teamId: number
    }

    export type ParticipantUpdateManyMutationInput = {
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
    }

    export type ParticipantUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
        teamId?: IntFieldUpdateOperationsInput | number
    }

    export type TeamsCreateInput = {
        name: string
        participant?: ParticipantCreateNestedManyWithoutTeamInput
        TournamentTeam?: TournamentTeamCreateNestedManyWithoutTeamInput
    }

    export type TeamsUncheckedCreateInput = {
        id?: number
        name: string
        participant?: ParticipantUncheckedCreateNestedManyWithoutTeamInput
        TournamentTeam?: TournamentTeamUncheckedCreateNestedManyWithoutTeamInput
    }

    export type TeamsUpdateInput = {
        name?: StringFieldUpdateOperationsInput | string
        participant?: ParticipantUpdateManyWithoutTeamNestedInput
        TournamentTeam?: TournamentTeamUpdateManyWithoutTeamNestedInput
    }

    export type TeamsUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        participant?: ParticipantUncheckedUpdateManyWithoutTeamNestedInput
        TournamentTeam?: TournamentTeamUncheckedUpdateManyWithoutTeamNestedInput
    }

    export type TeamsCreateManyInput = {
        id?: number
        name: string
    }

    export type TeamsUpdateManyMutationInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type TeamsUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type TournamentTeamCreateInput = {
        tournament: TournamentCreateNestedOneWithoutTournamentTeamInput
        team: TeamsCreateNestedOneWithoutTournamentTeamInput
    }

    export type TournamentTeamUncheckedCreateInput = {
        tournamentId: number
        teamId: number
    }

    export type TournamentTeamUpdateInput = {
        tournament?: TournamentUpdateOneRequiredWithoutTournamentTeamNestedInput
        team?: TeamsUpdateOneRequiredWithoutTournamentTeamNestedInput
    }

    export type TournamentTeamUncheckedUpdateInput = {
        tournamentId?: IntFieldUpdateOperationsInput | number
        teamId?: IntFieldUpdateOperationsInput | number
    }

    export type TournamentTeamCreateManyInput = {
        tournamentId: number
        teamId: number
    }

    export type TournamentTeamUpdateManyMutationInput = {}

    export type TournamentTeamUncheckedUpdateManyInput = {
        tournamentId?: IntFieldUpdateOperationsInput | number
        teamId?: IntFieldUpdateOperationsInput | number
    }

    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    }

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringFilter<$PrismaModel> | string
    }

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    }

    export type TournamentTeamListRelationFilter = {
        every?: TournamentTeamWhereInput
        some?: TournamentTeamWhereInput
        none?: TournamentTeamWhereInput
    }

    export type TournamentTeamOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type TournamentOrderByRelevanceInput = {
        fields:
            | TournamentOrderByRelevanceFieldEnum
            | TournamentOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type TournamentCountOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        format?: SortOrder
        date?: SortOrder
        createdAt?: SortOrder
    }

    export type TournamentAvgOrderByAggregateInput = {
        id?: SortOrder
    }

    export type TournamentMaxOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        format?: SortOrder
        date?: SortOrder
        createdAt?: SortOrder
    }

    export type TournamentMinOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        format?: SortOrder
        date?: SortOrder
        createdAt?: SortOrder
    }

    export type TournamentSumOrderByAggregateInput = {
        id?: SortOrder
    }

    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
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

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    }

    export type TeamsScalarRelationFilter = {
        is?: TeamsWhereInput
        isNot?: TeamsWhereInput
    }

    export type ParticipantOrderByRelevanceInput = {
        fields:
            | ParticipantOrderByRelevanceFieldEnum
            | ParticipantOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type ParticipantCountOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        surname?: SortOrder
        teamId?: SortOrder
    }

    export type ParticipantAvgOrderByAggregateInput = {
        id?: SortOrder
        teamId?: SortOrder
    }

    export type ParticipantMaxOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        surname?: SortOrder
        teamId?: SortOrder
    }

    export type ParticipantMinOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        surname?: SortOrder
        teamId?: SortOrder
    }

    export type ParticipantSumOrderByAggregateInput = {
        id?: SortOrder
        teamId?: SortOrder
    }

    export type ParticipantListRelationFilter = {
        every?: ParticipantWhereInput
        some?: ParticipantWhereInput
        none?: ParticipantWhereInput
    }

    export type ParticipantOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type TeamsOrderByRelevanceInput = {
        fields:
            | TeamsOrderByRelevanceFieldEnum
            | TeamsOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type TeamsCountOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type TeamsAvgOrderByAggregateInput = {
        id?: SortOrder
    }

    export type TeamsMaxOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type TeamsMinOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type TeamsSumOrderByAggregateInput = {
        id?: SortOrder
    }

    export type TournamentScalarRelationFilter = {
        is?: TournamentWhereInput
        isNot?: TournamentWhereInput
    }

    export type TournamentTeamTournamentIdTeamIdCompoundUniqueInput = {
        tournamentId: number
        teamId: number
    }

    export type TournamentTeamCountOrderByAggregateInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
    }

    export type TournamentTeamAvgOrderByAggregateInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
    }

    export type TournamentTeamMaxOrderByAggregateInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
    }

    export type TournamentTeamMinOrderByAggregateInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
    }

    export type TournamentTeamSumOrderByAggregateInput = {
        tournamentId?: SortOrder
        teamId?: SortOrder
    }

    export type TournamentTeamCreateNestedManyWithoutTournamentInput = {
        create?:
            | XOR<
                  TournamentTeamCreateWithoutTournamentInput,
                  TournamentTeamUncheckedCreateWithoutTournamentInput
              >
            | TournamentTeamCreateWithoutTournamentInput[]
            | TournamentTeamUncheckedCreateWithoutTournamentInput[]
        connectOrCreate?:
            | TournamentTeamCreateOrConnectWithoutTournamentInput
            | TournamentTeamCreateOrConnectWithoutTournamentInput[]
        createMany?: TournamentTeamCreateManyTournamentInputEnvelope
        connect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
    }

    export type TournamentTeamUncheckedCreateNestedManyWithoutTournamentInput =
        {
            create?:
                | XOR<
                      TournamentTeamCreateWithoutTournamentInput,
                      TournamentTeamUncheckedCreateWithoutTournamentInput
                  >
                | TournamentTeamCreateWithoutTournamentInput[]
                | TournamentTeamUncheckedCreateWithoutTournamentInput[]
            connectOrCreate?:
                | TournamentTeamCreateOrConnectWithoutTournamentInput
                | TournamentTeamCreateOrConnectWithoutTournamentInput[]
            createMany?: TournamentTeamCreateManyTournamentInputEnvelope
            connect?:
                | TournamentTeamWhereUniqueInput
                | TournamentTeamWhereUniqueInput[]
        }

    export type StringFieldUpdateOperationsInput = {
        set?: string
    }

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string
    }

    export type TournamentTeamUpdateManyWithoutTournamentNestedInput = {
        create?:
            | XOR<
                  TournamentTeamCreateWithoutTournamentInput,
                  TournamentTeamUncheckedCreateWithoutTournamentInput
              >
            | TournamentTeamCreateWithoutTournamentInput[]
            | TournamentTeamUncheckedCreateWithoutTournamentInput[]
        connectOrCreate?:
            | TournamentTeamCreateOrConnectWithoutTournamentInput
            | TournamentTeamCreateOrConnectWithoutTournamentInput[]
        upsert?:
            | TournamentTeamUpsertWithWhereUniqueWithoutTournamentInput
            | TournamentTeamUpsertWithWhereUniqueWithoutTournamentInput[]
        createMany?: TournamentTeamCreateManyTournamentInputEnvelope
        set?: TournamentTeamWhereUniqueInput | TournamentTeamWhereUniqueInput[]
        disconnect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        delete?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        connect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        update?:
            | TournamentTeamUpdateWithWhereUniqueWithoutTournamentInput
            | TournamentTeamUpdateWithWhereUniqueWithoutTournamentInput[]
        updateMany?:
            | TournamentTeamUpdateManyWithWhereWithoutTournamentInput
            | TournamentTeamUpdateManyWithWhereWithoutTournamentInput[]
        deleteMany?:
            | TournamentTeamScalarWhereInput
            | TournamentTeamScalarWhereInput[]
    }

    export type IntFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    }

    export type TournamentTeamUncheckedUpdateManyWithoutTournamentNestedInput =
        {
            create?:
                | XOR<
                      TournamentTeamCreateWithoutTournamentInput,
                      TournamentTeamUncheckedCreateWithoutTournamentInput
                  >
                | TournamentTeamCreateWithoutTournamentInput[]
                | TournamentTeamUncheckedCreateWithoutTournamentInput[]
            connectOrCreate?:
                | TournamentTeamCreateOrConnectWithoutTournamentInput
                | TournamentTeamCreateOrConnectWithoutTournamentInput[]
            upsert?:
                | TournamentTeamUpsertWithWhereUniqueWithoutTournamentInput
                | TournamentTeamUpsertWithWhereUniqueWithoutTournamentInput[]
            createMany?: TournamentTeamCreateManyTournamentInputEnvelope
            set?:
                | TournamentTeamWhereUniqueInput
                | TournamentTeamWhereUniqueInput[]
            disconnect?:
                | TournamentTeamWhereUniqueInput
                | TournamentTeamWhereUniqueInput[]
            delete?:
                | TournamentTeamWhereUniqueInput
                | TournamentTeamWhereUniqueInput[]
            connect?:
                | TournamentTeamWhereUniqueInput
                | TournamentTeamWhereUniqueInput[]
            update?:
                | TournamentTeamUpdateWithWhereUniqueWithoutTournamentInput
                | TournamentTeamUpdateWithWhereUniqueWithoutTournamentInput[]
            updateMany?:
                | TournamentTeamUpdateManyWithWhereWithoutTournamentInput
                | TournamentTeamUpdateManyWithWhereWithoutTournamentInput[]
            deleteMany?:
                | TournamentTeamScalarWhereInput
                | TournamentTeamScalarWhereInput[]
        }

    export type TeamsCreateNestedOneWithoutParticipantInput = {
        create?: XOR<
            TeamsCreateWithoutParticipantInput,
            TeamsUncheckedCreateWithoutParticipantInput
        >
        connectOrCreate?: TeamsCreateOrConnectWithoutParticipantInput
        connect?: TeamsWhereUniqueInput
    }

    export type TeamsUpdateOneRequiredWithoutParticipantNestedInput = {
        create?: XOR<
            TeamsCreateWithoutParticipantInput,
            TeamsUncheckedCreateWithoutParticipantInput
        >
        connectOrCreate?: TeamsCreateOrConnectWithoutParticipantInput
        upsert?: TeamsUpsertWithoutParticipantInput
        connect?: TeamsWhereUniqueInput
        update?: XOR<
            XOR<
                TeamsUpdateToOneWithWhereWithoutParticipantInput,
                TeamsUpdateWithoutParticipantInput
            >,
            TeamsUncheckedUpdateWithoutParticipantInput
        >
    }

    export type ParticipantCreateNestedManyWithoutTeamInput = {
        create?:
            | XOR<
                  ParticipantCreateWithoutTeamInput,
                  ParticipantUncheckedCreateWithoutTeamInput
              >
            | ParticipantCreateWithoutTeamInput[]
            | ParticipantUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | ParticipantCreateOrConnectWithoutTeamInput
            | ParticipantCreateOrConnectWithoutTeamInput[]
        createMany?: ParticipantCreateManyTeamInputEnvelope
        connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    }

    export type TournamentTeamCreateNestedManyWithoutTeamInput = {
        create?:
            | XOR<
                  TournamentTeamCreateWithoutTeamInput,
                  TournamentTeamUncheckedCreateWithoutTeamInput
              >
            | TournamentTeamCreateWithoutTeamInput[]
            | TournamentTeamUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | TournamentTeamCreateOrConnectWithoutTeamInput
            | TournamentTeamCreateOrConnectWithoutTeamInput[]
        createMany?: TournamentTeamCreateManyTeamInputEnvelope
        connect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
    }

    export type ParticipantUncheckedCreateNestedManyWithoutTeamInput = {
        create?:
            | XOR<
                  ParticipantCreateWithoutTeamInput,
                  ParticipantUncheckedCreateWithoutTeamInput
              >
            | ParticipantCreateWithoutTeamInput[]
            | ParticipantUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | ParticipantCreateOrConnectWithoutTeamInput
            | ParticipantCreateOrConnectWithoutTeamInput[]
        createMany?: ParticipantCreateManyTeamInputEnvelope
        connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    }

    export type TournamentTeamUncheckedCreateNestedManyWithoutTeamInput = {
        create?:
            | XOR<
                  TournamentTeamCreateWithoutTeamInput,
                  TournamentTeamUncheckedCreateWithoutTeamInput
              >
            | TournamentTeamCreateWithoutTeamInput[]
            | TournamentTeamUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | TournamentTeamCreateOrConnectWithoutTeamInput
            | TournamentTeamCreateOrConnectWithoutTeamInput[]
        createMany?: TournamentTeamCreateManyTeamInputEnvelope
        connect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
    }

    export type ParticipantUpdateManyWithoutTeamNestedInput = {
        create?:
            | XOR<
                  ParticipantCreateWithoutTeamInput,
                  ParticipantUncheckedCreateWithoutTeamInput
              >
            | ParticipantCreateWithoutTeamInput[]
            | ParticipantUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | ParticipantCreateOrConnectWithoutTeamInput
            | ParticipantCreateOrConnectWithoutTeamInput[]
        upsert?:
            | ParticipantUpsertWithWhereUniqueWithoutTeamInput
            | ParticipantUpsertWithWhereUniqueWithoutTeamInput[]
        createMany?: ParticipantCreateManyTeamInputEnvelope
        set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        update?:
            | ParticipantUpdateWithWhereUniqueWithoutTeamInput
            | ParticipantUpdateWithWhereUniqueWithoutTeamInput[]
        updateMany?:
            | ParticipantUpdateManyWithWhereWithoutTeamInput
            | ParticipantUpdateManyWithWhereWithoutTeamInput[]
        deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    }

    export type TournamentTeamUpdateManyWithoutTeamNestedInput = {
        create?:
            | XOR<
                  TournamentTeamCreateWithoutTeamInput,
                  TournamentTeamUncheckedCreateWithoutTeamInput
              >
            | TournamentTeamCreateWithoutTeamInput[]
            | TournamentTeamUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | TournamentTeamCreateOrConnectWithoutTeamInput
            | TournamentTeamCreateOrConnectWithoutTeamInput[]
        upsert?:
            | TournamentTeamUpsertWithWhereUniqueWithoutTeamInput
            | TournamentTeamUpsertWithWhereUniqueWithoutTeamInput[]
        createMany?: TournamentTeamCreateManyTeamInputEnvelope
        set?: TournamentTeamWhereUniqueInput | TournamentTeamWhereUniqueInput[]
        disconnect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        delete?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        connect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        update?:
            | TournamentTeamUpdateWithWhereUniqueWithoutTeamInput
            | TournamentTeamUpdateWithWhereUniqueWithoutTeamInput[]
        updateMany?:
            | TournamentTeamUpdateManyWithWhereWithoutTeamInput
            | TournamentTeamUpdateManyWithWhereWithoutTeamInput[]
        deleteMany?:
            | TournamentTeamScalarWhereInput
            | TournamentTeamScalarWhereInput[]
    }

    export type ParticipantUncheckedUpdateManyWithoutTeamNestedInput = {
        create?:
            | XOR<
                  ParticipantCreateWithoutTeamInput,
                  ParticipantUncheckedCreateWithoutTeamInput
              >
            | ParticipantCreateWithoutTeamInput[]
            | ParticipantUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | ParticipantCreateOrConnectWithoutTeamInput
            | ParticipantCreateOrConnectWithoutTeamInput[]
        upsert?:
            | ParticipantUpsertWithWhereUniqueWithoutTeamInput
            | ParticipantUpsertWithWhereUniqueWithoutTeamInput[]
        createMany?: ParticipantCreateManyTeamInputEnvelope
        set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
        update?:
            | ParticipantUpdateWithWhereUniqueWithoutTeamInput
            | ParticipantUpdateWithWhereUniqueWithoutTeamInput[]
        updateMany?:
            | ParticipantUpdateManyWithWhereWithoutTeamInput
            | ParticipantUpdateManyWithWhereWithoutTeamInput[]
        deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    }

    export type TournamentTeamUncheckedUpdateManyWithoutTeamNestedInput = {
        create?:
            | XOR<
                  TournamentTeamCreateWithoutTeamInput,
                  TournamentTeamUncheckedCreateWithoutTeamInput
              >
            | TournamentTeamCreateWithoutTeamInput[]
            | TournamentTeamUncheckedCreateWithoutTeamInput[]
        connectOrCreate?:
            | TournamentTeamCreateOrConnectWithoutTeamInput
            | TournamentTeamCreateOrConnectWithoutTeamInput[]
        upsert?:
            | TournamentTeamUpsertWithWhereUniqueWithoutTeamInput
            | TournamentTeamUpsertWithWhereUniqueWithoutTeamInput[]
        createMany?: TournamentTeamCreateManyTeamInputEnvelope
        set?: TournamentTeamWhereUniqueInput | TournamentTeamWhereUniqueInput[]
        disconnect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        delete?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        connect?:
            | TournamentTeamWhereUniqueInput
            | TournamentTeamWhereUniqueInput[]
        update?:
            | TournamentTeamUpdateWithWhereUniqueWithoutTeamInput
            | TournamentTeamUpdateWithWhereUniqueWithoutTeamInput[]
        updateMany?:
            | TournamentTeamUpdateManyWithWhereWithoutTeamInput
            | TournamentTeamUpdateManyWithWhereWithoutTeamInput[]
        deleteMany?:
            | TournamentTeamScalarWhereInput
            | TournamentTeamScalarWhereInput[]
    }

    export type TournamentCreateNestedOneWithoutTournamentTeamInput = {
        create?: XOR<
            TournamentCreateWithoutTournamentTeamInput,
            TournamentUncheckedCreateWithoutTournamentTeamInput
        >
        connectOrCreate?: TournamentCreateOrConnectWithoutTournamentTeamInput
        connect?: TournamentWhereUniqueInput
    }

    export type TeamsCreateNestedOneWithoutTournamentTeamInput = {
        create?: XOR<
            TeamsCreateWithoutTournamentTeamInput,
            TeamsUncheckedCreateWithoutTournamentTeamInput
        >
        connectOrCreate?: TeamsCreateOrConnectWithoutTournamentTeamInput
        connect?: TeamsWhereUniqueInput
    }

    export type TournamentUpdateOneRequiredWithoutTournamentTeamNestedInput = {
        create?: XOR<
            TournamentCreateWithoutTournamentTeamInput,
            TournamentUncheckedCreateWithoutTournamentTeamInput
        >
        connectOrCreate?: TournamentCreateOrConnectWithoutTournamentTeamInput
        upsert?: TournamentUpsertWithoutTournamentTeamInput
        connect?: TournamentWhereUniqueInput
        update?: XOR<
            XOR<
                TournamentUpdateToOneWithWhereWithoutTournamentTeamInput,
                TournamentUpdateWithoutTournamentTeamInput
            >,
            TournamentUncheckedUpdateWithoutTournamentTeamInput
        >
    }

    export type TeamsUpdateOneRequiredWithoutTournamentTeamNestedInput = {
        create?: XOR<
            TeamsCreateWithoutTournamentTeamInput,
            TeamsUncheckedCreateWithoutTournamentTeamInput
        >
        connectOrCreate?: TeamsCreateOrConnectWithoutTournamentTeamInput
        upsert?: TeamsUpsertWithoutTournamentTeamInput
        connect?: TeamsWhereUniqueInput
        update?: XOR<
            XOR<
                TeamsUpdateToOneWithWhereWithoutTournamentTeamInput,
                TeamsUpdateWithoutTournamentTeamInput
            >,
            TeamsUncheckedUpdateWithoutTournamentTeamInput
        >
    }

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    }

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringFilter<$PrismaModel> | string
    }

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    }

    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
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

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatFilter<$PrismaModel> | number
    }

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    }

    export type TournamentTeamCreateWithoutTournamentInput = {
        team: TeamsCreateNestedOneWithoutTournamentTeamInput
    }

    export type TournamentTeamUncheckedCreateWithoutTournamentInput = {
        teamId: number
    }

    export type TournamentTeamCreateOrConnectWithoutTournamentInput = {
        where: TournamentTeamWhereUniqueInput
        create: XOR<
            TournamentTeamCreateWithoutTournamentInput,
            TournamentTeamUncheckedCreateWithoutTournamentInput
        >
    }

    export type TournamentTeamCreateManyTournamentInputEnvelope = {
        data:
            | TournamentTeamCreateManyTournamentInput
            | TournamentTeamCreateManyTournamentInput[]
        skipDuplicates?: boolean
    }

    export type TournamentTeamUpsertWithWhereUniqueWithoutTournamentInput = {
        where: TournamentTeamWhereUniqueInput
        update: XOR<
            TournamentTeamUpdateWithoutTournamentInput,
            TournamentTeamUncheckedUpdateWithoutTournamentInput
        >
        create: XOR<
            TournamentTeamCreateWithoutTournamentInput,
            TournamentTeamUncheckedCreateWithoutTournamentInput
        >
    }

    export type TournamentTeamUpdateWithWhereUniqueWithoutTournamentInput = {
        where: TournamentTeamWhereUniqueInput
        data: XOR<
            TournamentTeamUpdateWithoutTournamentInput,
            TournamentTeamUncheckedUpdateWithoutTournamentInput
        >
    }

    export type TournamentTeamUpdateManyWithWhereWithoutTournamentInput = {
        where: TournamentTeamScalarWhereInput
        data: XOR<
            TournamentTeamUpdateManyMutationInput,
            TournamentTeamUncheckedUpdateManyWithoutTournamentInput
        >
    }

    export type TournamentTeamScalarWhereInput = {
        AND?: TournamentTeamScalarWhereInput | TournamentTeamScalarWhereInput[]
        OR?: TournamentTeamScalarWhereInput[]
        NOT?: TournamentTeamScalarWhereInput | TournamentTeamScalarWhereInput[]
        tournamentId?: IntFilter<'TournamentTeam'> | number
        teamId?: IntFilter<'TournamentTeam'> | number
    }

    export type TeamsCreateWithoutParticipantInput = {
        name: string
        TournamentTeam?: TournamentTeamCreateNestedManyWithoutTeamInput
    }

    export type TeamsUncheckedCreateWithoutParticipantInput = {
        id?: number
        name: string
        TournamentTeam?: TournamentTeamUncheckedCreateNestedManyWithoutTeamInput
    }

    export type TeamsCreateOrConnectWithoutParticipantInput = {
        where: TeamsWhereUniqueInput
        create: XOR<
            TeamsCreateWithoutParticipantInput,
            TeamsUncheckedCreateWithoutParticipantInput
        >
    }

    export type TeamsUpsertWithoutParticipantInput = {
        update: XOR<
            TeamsUpdateWithoutParticipantInput,
            TeamsUncheckedUpdateWithoutParticipantInput
        >
        create: XOR<
            TeamsCreateWithoutParticipantInput,
            TeamsUncheckedCreateWithoutParticipantInput
        >
        where?: TeamsWhereInput
    }

    export type TeamsUpdateToOneWithWhereWithoutParticipantInput = {
        where?: TeamsWhereInput
        data: XOR<
            TeamsUpdateWithoutParticipantInput,
            TeamsUncheckedUpdateWithoutParticipantInput
        >
    }

    export type TeamsUpdateWithoutParticipantInput = {
        name?: StringFieldUpdateOperationsInput | string
        TournamentTeam?: TournamentTeamUpdateManyWithoutTeamNestedInput
    }

    export type TeamsUncheckedUpdateWithoutParticipantInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        TournamentTeam?: TournamentTeamUncheckedUpdateManyWithoutTeamNestedInput
    }

    export type ParticipantCreateWithoutTeamInput = {
        name: string
        surname: string
    }

    export type ParticipantUncheckedCreateWithoutTeamInput = {
        id?: number
        name: string
        surname: string
    }

    export type ParticipantCreateOrConnectWithoutTeamInput = {
        where: ParticipantWhereUniqueInput
        create: XOR<
            ParticipantCreateWithoutTeamInput,
            ParticipantUncheckedCreateWithoutTeamInput
        >
    }

    export type ParticipantCreateManyTeamInputEnvelope = {
        data: ParticipantCreateManyTeamInput | ParticipantCreateManyTeamInput[]
        skipDuplicates?: boolean
    }

    export type TournamentTeamCreateWithoutTeamInput = {
        tournament: TournamentCreateNestedOneWithoutTournamentTeamInput
    }

    export type TournamentTeamUncheckedCreateWithoutTeamInput = {
        tournamentId: number
    }

    export type TournamentTeamCreateOrConnectWithoutTeamInput = {
        where: TournamentTeamWhereUniqueInput
        create: XOR<
            TournamentTeamCreateWithoutTeamInput,
            TournamentTeamUncheckedCreateWithoutTeamInput
        >
    }

    export type TournamentTeamCreateManyTeamInputEnvelope = {
        data:
            | TournamentTeamCreateManyTeamInput
            | TournamentTeamCreateManyTeamInput[]
        skipDuplicates?: boolean
    }

    export type ParticipantUpsertWithWhereUniqueWithoutTeamInput = {
        where: ParticipantWhereUniqueInput
        update: XOR<
            ParticipantUpdateWithoutTeamInput,
            ParticipantUncheckedUpdateWithoutTeamInput
        >
        create: XOR<
            ParticipantCreateWithoutTeamInput,
            ParticipantUncheckedCreateWithoutTeamInput
        >
    }

    export type ParticipantUpdateWithWhereUniqueWithoutTeamInput = {
        where: ParticipantWhereUniqueInput
        data: XOR<
            ParticipantUpdateWithoutTeamInput,
            ParticipantUncheckedUpdateWithoutTeamInput
        >
    }

    export type ParticipantUpdateManyWithWhereWithoutTeamInput = {
        where: ParticipantScalarWhereInput
        data: XOR<
            ParticipantUpdateManyMutationInput,
            ParticipantUncheckedUpdateManyWithoutTeamInput
        >
    }

    export type ParticipantScalarWhereInput = {
        AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
        OR?: ParticipantScalarWhereInput[]
        NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
        id?: IntFilter<'Participant'> | number
        name?: StringFilter<'Participant'> | string
        surname?: StringFilter<'Participant'> | string
        teamId?: IntFilter<'Participant'> | number
    }

    export type TournamentTeamUpsertWithWhereUniqueWithoutTeamInput = {
        where: TournamentTeamWhereUniqueInput
        update: XOR<
            TournamentTeamUpdateWithoutTeamInput,
            TournamentTeamUncheckedUpdateWithoutTeamInput
        >
        create: XOR<
            TournamentTeamCreateWithoutTeamInput,
            TournamentTeamUncheckedCreateWithoutTeamInput
        >
    }

    export type TournamentTeamUpdateWithWhereUniqueWithoutTeamInput = {
        where: TournamentTeamWhereUniqueInput
        data: XOR<
            TournamentTeamUpdateWithoutTeamInput,
            TournamentTeamUncheckedUpdateWithoutTeamInput
        >
    }

    export type TournamentTeamUpdateManyWithWhereWithoutTeamInput = {
        where: TournamentTeamScalarWhereInput
        data: XOR<
            TournamentTeamUpdateManyMutationInput,
            TournamentTeamUncheckedUpdateManyWithoutTeamInput
        >
    }

    export type TournamentCreateWithoutTournamentTeamInput = {
        name: string
        format: string
        date: Date | string
        createdAt?: Date | string
    }

    export type TournamentUncheckedCreateWithoutTournamentTeamInput = {
        id?: number
        name: string
        format: string
        date: Date | string
        createdAt?: Date | string
    }

    export type TournamentCreateOrConnectWithoutTournamentTeamInput = {
        where: TournamentWhereUniqueInput
        create: XOR<
            TournamentCreateWithoutTournamentTeamInput,
            TournamentUncheckedCreateWithoutTournamentTeamInput
        >
    }

    export type TeamsCreateWithoutTournamentTeamInput = {
        name: string
        participant?: ParticipantCreateNestedManyWithoutTeamInput
    }

    export type TeamsUncheckedCreateWithoutTournamentTeamInput = {
        id?: number
        name: string
        participant?: ParticipantUncheckedCreateNestedManyWithoutTeamInput
    }

    export type TeamsCreateOrConnectWithoutTournamentTeamInput = {
        where: TeamsWhereUniqueInput
        create: XOR<
            TeamsCreateWithoutTournamentTeamInput,
            TeamsUncheckedCreateWithoutTournamentTeamInput
        >
    }

    export type TournamentUpsertWithoutTournamentTeamInput = {
        update: XOR<
            TournamentUpdateWithoutTournamentTeamInput,
            TournamentUncheckedUpdateWithoutTournamentTeamInput
        >
        create: XOR<
            TournamentCreateWithoutTournamentTeamInput,
            TournamentUncheckedCreateWithoutTournamentTeamInput
        >
        where?: TournamentWhereInput
    }

    export type TournamentUpdateToOneWithWhereWithoutTournamentTeamInput = {
        where?: TournamentWhereInput
        data: XOR<
            TournamentUpdateWithoutTournamentTeamInput,
            TournamentUncheckedUpdateWithoutTournamentTeamInput
        >
    }

    export type TournamentUpdateWithoutTournamentTeamInput = {
        name?: StringFieldUpdateOperationsInput | string
        format?: StringFieldUpdateOperationsInput | string
        date?: DateTimeFieldUpdateOperationsInput | Date | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type TournamentUncheckedUpdateWithoutTournamentTeamInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        format?: StringFieldUpdateOperationsInput | string
        date?: DateTimeFieldUpdateOperationsInput | Date | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type TeamsUpsertWithoutTournamentTeamInput = {
        update: XOR<
            TeamsUpdateWithoutTournamentTeamInput,
            TeamsUncheckedUpdateWithoutTournamentTeamInput
        >
        create: XOR<
            TeamsCreateWithoutTournamentTeamInput,
            TeamsUncheckedCreateWithoutTournamentTeamInput
        >
        where?: TeamsWhereInput
    }

    export type TeamsUpdateToOneWithWhereWithoutTournamentTeamInput = {
        where?: TeamsWhereInput
        data: XOR<
            TeamsUpdateWithoutTournamentTeamInput,
            TeamsUncheckedUpdateWithoutTournamentTeamInput
        >
    }

    export type TeamsUpdateWithoutTournamentTeamInput = {
        name?: StringFieldUpdateOperationsInput | string
        participant?: ParticipantUpdateManyWithoutTeamNestedInput
    }

    export type TeamsUncheckedUpdateWithoutTournamentTeamInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        participant?: ParticipantUncheckedUpdateManyWithoutTeamNestedInput
    }

    export type TournamentTeamCreateManyTournamentInput = {
        teamId: number
    }

    export type TournamentTeamUpdateWithoutTournamentInput = {
        team?: TeamsUpdateOneRequiredWithoutTournamentTeamNestedInput
    }

    export type TournamentTeamUncheckedUpdateWithoutTournamentInput = {
        teamId?: IntFieldUpdateOperationsInput | number
    }

    export type TournamentTeamUncheckedUpdateManyWithoutTournamentInput = {
        teamId?: IntFieldUpdateOperationsInput | number
    }

    export type ParticipantCreateManyTeamInput = {
        id?: number
        name: string
        surname: string
    }

    export type TournamentTeamCreateManyTeamInput = {
        tournamentId: number
    }

    export type ParticipantUpdateWithoutTeamInput = {
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
    }

    export type ParticipantUncheckedUpdateWithoutTeamInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
    }

    export type ParticipantUncheckedUpdateManyWithoutTeamInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        surname?: StringFieldUpdateOperationsInput | string
    }

    export type TournamentTeamUpdateWithoutTeamInput = {
        tournament?: TournamentUpdateOneRequiredWithoutTournamentTeamNestedInput
    }

    export type TournamentTeamUncheckedUpdateWithoutTeamInput = {
        tournamentId?: IntFieldUpdateOperationsInput | number
    }

    export type TournamentTeamUncheckedUpdateManyWithoutTeamInput = {
        tournamentId?: IntFieldUpdateOperationsInput | number
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
