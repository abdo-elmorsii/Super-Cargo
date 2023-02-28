const path = require("path");
const I18NextHttpBackend = require('i18next-http-backend')

module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: false,
		backend: {
			loadPath: `${process.env.INTERNAL_API_URI}/api/locales/{{lng}}/{{ns}}`
	  },
		
    localePath: path.resolve("./public/locales"),
  },
};