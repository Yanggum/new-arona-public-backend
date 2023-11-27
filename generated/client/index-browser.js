
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Cc_charScalarFieldEnum = {
  CHAR_NO: 'CHAR_NO',
  CHAR_NAME: 'CHAR_NAME',
  CHAR_TYPE: 'CHAR_TYPE',
  CHAR_INFO: 'CHAR_INFO',
  UPD_ID: 'UPD_ID',
  UPD_DT: 'UPD_DT',
  REG_ID: 'REG_ID',
  REG_DT: 'REG_DT',
  STD_CODE_NAME: 'STD_CODE_NAME',
  STD_FULL_NAME: 'STD_FULL_NAME',
  STD_INC_ID: 'STD_INC_ID',
  STD_ID: 'STD_ID',
  STD_TOKEN: 'STD_TOKEN',
  STD_ROLE: 'STD_ROLE',
  STD_ERROR_MSG: 'STD_ERROR_MSG',
  STD_STATUS: 'STD_STATUS',
  THUMBNAIL: 'THUMBNAIL',
  TEMPERATURE: 'TEMPERATURE',
  F_PENALTY: 'F_PENALTY',
  P_PENALTY: 'P_PENALTY',
  STD_SHORT_NAME: 'STD_SHORT_NAME'
};

exports.Prisma.Cc_char_chatScalarFieldEnum = {
  CHAT_NO: 'CHAT_NO',
  CHAR_NO: 'CHAR_NO',
  CHAT_ROOM_NO: 'CHAT_ROOM_NO',
  IS_LEARN: 'IS_LEARN',
  REG_DT: 'REG_DT',
  UPD_ID: 'UPD_ID',
  UPD_DT: 'UPD_DT',
  CHAT_CONT: 'CHAT_CONT',
  REG_ID: 'REG_ID'
};

exports.Prisma.Cc_char_chat_for_learnScalarFieldEnum = {
  CHAT_LEARN_NO: 'CHAT_LEARN_NO',
  CHAT_CONT: 'CHAT_CONT',
  REG_ID: 'REG_ID',
  REG_DT: 'REG_DT',
  UPD_ID: 'UPD_ID',
  UPD_DT: 'UPD_DT',
  CHAR_NO: 'CHAR_NO',
  CHAT_ROOM_NO: 'CHAT_ROOM_NO'
};

exports.Prisma.Cc_char_chat_logScalarFieldEnum = {
  CHAT_LOG_NO: 'CHAT_LOG_NO',
  CHAR_NO: 'CHAR_NO',
  CHAT_ROOM_NO: 'CHAT_ROOM_NO',
  IS_LEARN: 'IS_LEARN',
  REG_DT: 'REG_DT',
  UPD_ID: 'UPD_ID',
  UPD_DT: 'UPD_DT',
  CHAT_CONT: 'CHAT_CONT',
  REG_ID: 'REG_ID'
};

exports.Prisma.Cc_char_chat_premiumScalarFieldEnum = {
  CHAT_NO: 'CHAT_NO',
  CHAR_NO: 'CHAR_NO',
  CHAT_ROOM_NO: 'CHAT_ROOM_NO',
  IS_LEARN: 'IS_LEARN',
  REG_DT: 'REG_DT',
  UPD_ID: 'UPD_ID',
  UPD_DT: 'UPD_DT',
  CHAT_CONT: 'CHAT_CONT',
  REG_ID: 'REG_ID'
};

exports.Prisma.Cc_userScalarFieldEnum = {
  USER_NO: 'USER_NO',
  USER_NAME: 'USER_NAME',
  REG_ID: 'REG_ID',
  REG_DT: 'REG_DT',
  UPD_ID: 'UPD_ID',
  UPD_DT: 'UPD_DT',
  USER_DISCORD_ID: 'USER_DISCORD_ID',
  PREMIUM_REMEMBER_CONV_COUNT: 'PREMIUM_REMEMBER_CONV_COUNT',
  PREMIUM_CURRENT_ROOM_NO: 'PREMIUM_CURRENT_ROOM_NO',
  TODAY_USER_USAGE: 'TODAY_USER_USAGE'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  cc_char: 'cc_char',
  cc_char_chat: 'cc_char_chat',
  cc_char_chat_for_learn: 'cc_char_chat_for_learn',
  cc_char_chat_log: 'cc_char_chat_log',
  cc_char_chat_premium: 'cc_char_chat_premium',
  cc_user: 'cc_user'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
