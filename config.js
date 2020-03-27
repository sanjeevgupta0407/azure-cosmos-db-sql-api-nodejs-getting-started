// @ts-check

const config = {
  endpoint: "https://cosmodbacc-01.documents.azure.com:443/",
  key: "7FkOZNVvJMS6K92PvKrR1bHMSygeWFWuREPz3tVihyiEvnXzWiFYxMfL0aLXlsaxIv7tyDx0EaBof78kQ7Yvsg==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
