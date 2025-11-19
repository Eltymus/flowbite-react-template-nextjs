module.exports = {
  i18n: {
    locales: ["it", "es-419", "en"],
    defaultLocale: "en",
  },
  fallbackLng: {
    default: ["en"],
  },
  nonExplicitSupportedLngs: true,
  localePath: path.resolve("/languages"),
};
