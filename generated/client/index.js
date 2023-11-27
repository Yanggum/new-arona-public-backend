
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Projects\\2023\\new-arona-backend\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4uL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciAgICAgPSAibXlzcWwiDQogIHVybCAgICAgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikNCiAgcmVsYXRpb25Nb2RlID0gInByaXNtYSINCn0NCg0KbW9kZWwgY2NfY2hhciB7DQogIENIQVJfTk8gICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBDSEFSX05BTUUgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU2KQ0KICBDSEFSX1RZUEUgICAgICBTdHJpbmc/ICAgQGRlZmF1bHQoIkMiKSBAZGIuQ2hhcigxKQ0KICBDSEFSX0lORk8gICAgICBTdHJpbmc/ICAgQGRiLlRleHQNCiAgVVBEX0lEICAgICAgICAgU3RyaW5nPyAgIEBkZWZhdWx0KCJhZG1pbiIpIEBkYi5WYXJDaGFyKDUwKQ0KICBVUERfRFQgICAgICAgICBEYXRlVGltZT8gQHVwZGF0ZWRBdA0KICBSRUdfSUQgICAgICAgICBTdHJpbmc/ICAgQGRlZmF1bHQoImFkbWluIikgQGRiLlZhckNoYXIoNTApDQogIFJFR19EVCAgICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkNCiAgU1REX0NPREVfTkFNRSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NikNCiAgU1REX0ZVTExfTkFNRSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NikNCiAgU1REX0lOQ19JRCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NikNCiAgU1REX0lEICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDE5MSkNCiAgU1REX1RPS0VOICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NikNCiAgU1REX1JPTEUgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDE5MSkNCiAgU1REX0VSUk9SX01TRyAgU3RyaW5nPyAgIEBkZWZhdWx0KCLsgqzrnpHtlbTsmpQuIikgQGRiLlZhckNoYXIoMjU2KQ0KICBTVERfU1RBVFVTICAgICBTdHJpbmc/ICAgQGRlZmF1bHQoIuqzteu2gCIpIEBkYi5WYXJDaGFyKDI1NikNCiAgVEhVTUJOQUlMICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NikNCiAgVEVNUEVSQVRVUkUgICAgRmxvYXQ/ICAgIEBkZWZhdWx0KDAuNSkNCiAgRl9QRU5BTFRZICAgICAgRmxvYXQ/ICAgIEBkZWZhdWx0KDAuNSkNCiAgUF9QRU5BTFRZICAgICAgRmxvYXQ/ICAgIEBkZWZhdWx0KDApDQogIFNURF9TSE9SVF9OQU1FIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyMCkNCn0NCg0KbW9kZWwgY2NfY2hhcl9jaGF0IHsNCiAgQ0hBVF9OTyAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBDSEFSX05PICAgICAgSW50DQogIENIQVRfUk9PTV9OTyBJbnQgICAgICAgQGRlZmF1bHQoMSkNCiAgSVNfTEVBUk4gICAgIFN0cmluZz8gICBAZGIuQ2hhcigxKQ0KICBSRUdfRFQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQ0KICBVUERfSUQgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQ0KICBVUERfRFQgICAgICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQNCiAgQ0hBVF9DT05UICAgIFN0cmluZz8gICBAZGIuVGV4dA0KICBSRUdfSUQgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQ0KfQ0KDQptb2RlbCBjY19jaGFyX2NoYXRfZm9yX2xlYXJuIHsNCiAgQ0hBVF9MRUFSTl9OTyBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgQ0hBVF9DT05UICAgICBTdHJpbmc/ICAgQGRiLlRpbnlUZXh0DQogIFJFR19JRCAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQ0KICBSRUdfRFQgICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkNCiAgVVBEX0lEICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApDQogIFVQRF9EVCAgICAgICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQNCiAgQ0hBUl9OTyAgICAgICBJbnQNCiAgQ0hBVF9ST09NX05PICBJbnQgICAgICAgQGRlZmF1bHQoMSkNCn0NCg0KbW9kZWwgY2NfY2hhcl9jaGF0X2xvZyB7DQogIENIQVRfTE9HX05PICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgQ0hBUl9OTyAgICAgIEludA0KICBDSEFUX1JPT01fTk8gSW50ICAgICAgIEBkZWZhdWx0KDEpDQogIElTX0xFQVJOICAgICBTdHJpbmc/ICAgQGRiLkNoYXIoMSkNCiAgUkVHX0RUICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkNCiAgVVBEX0lEICAgICAgIFN0cmluZz8gICBAZGVmYXVsdCgiYWRtaW4iKSBAZGIuVmFyQ2hhcig1MCkNCiAgVVBEX0RUICAgICAgIERhdGVUaW1lPyBAdXBkYXRlZEF0DQogIENIQVRfQ09OVCAgICBTdHJpbmc/ICAgQGRiLlRleHQNCiAgUkVHX0lEICAgICAgIFN0cmluZz8gICBAZGVmYXVsdCgiYWRtaW4iKSBAZGIuVmFyQ2hhcig1MCkNCn0NCg0KbW9kZWwgY2NfY2hhcl9jaGF0X3ByZW1pdW0gew0KICBDSEFUX05PICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIENIQVJfTk8gICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQ0KICBDSEFUX1JPT01fTk8gU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1MCkNCiAgSVNfTEVBUk4gICAgIFN0cmluZz8gICBAZGIuQ2hhcigxKQ0KICBSRUdfRFQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQ0KICBVUERfSUQgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQ0KICBVUERfRFQgICAgICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQNCiAgQ0hBVF9DT05UICAgIFN0cmluZz8gICBAZGIuVGV4dA0KICBSRUdfSUQgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQ0KfQ0KDQptb2RlbCBjY191c2VyIHsNCiAgVVNFUl9OTyAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBVU0VSX05BTUUgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NikNCiAgUkVHX0lEICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGVmYXVsdCgiYWRtaW4iKSBAZGIuVmFyQ2hhcig1MCkNCiAgUkVHX0RUICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkNCiAgVVBEX0lEICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGVmYXVsdCgiYWRtaW4iKSBAZGIuVmFyQ2hhcig1MCkNCiAgVVBEX0RUICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyBAdXBkYXRlZEF0DQogIFVTRVJfRElTQ09SRF9JRCAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU2KQ0KICBQUkVNSVVNX1JFTUVNQkVSX0NPTlZfQ09VTlQgSW50PyAgICAgIEBkZWZhdWx0KDApDQogIFBSRU1JVU1fQ1VSUkVOVF9ST09NX05PICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMSkNCiAgVE9EQVlfVVNFUl9VU0FHRSAgICAgICAgICAgIEludD8gICAgICBAZGVmYXVsdCgwKQ0KfQ0K",
  "inlineSchemaHash": "746c2b0dfc286a2990b9b24cf0e06616714dc476cf0345e9e048b5659d0a558f"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"cc_char\":{\"dbName\":null,\"fields\":[{\"name\":\"CHAR_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAR_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAR_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"C\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAR_INFO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"REG_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_CODE_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_FULL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_INC_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_TOKEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_ROLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_ERROR_MSG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"사랑해요.\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_STATUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"공부\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"THUMBNAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TEMPERATURE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0.5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"F_PENALTY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0.5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"P_PENALTY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STD_SHORT_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_char_chat\":{\"dbName\":null,\"fields\":[{\"name\":\"CHAT_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAR_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAT_ROOM_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_LEARN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"CHAT_CONT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_char_chat_for_learn\":{\"dbName\":null,\"fields\":[{\"name\":\"CHAT_LEARN_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAT_CONT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"CHAR_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAT_ROOM_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_char_chat_log\":{\"dbName\":null,\"fields\":[{\"name\":\"CHAT_LOG_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAR_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAT_ROOM_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_LEARN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"CHAT_CONT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_char_chat_premium\":{\"dbName\":null,\"fields\":[{\"name\":\"CHAT_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAR_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAT_ROOM_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_LEARN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"CHAT_CONT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_user\":{\"dbName\":null,\"fields\":[{\"name\":\"USER_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPD_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"USER_DISCORD_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PREMIUM_REMEMBER_CONV_COUNT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PREMIUM_CURRENT_ROOM_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TODAY_USER_USAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
