var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// netlify/functions/submit.ts
__export(exports, {
  handler: () => handler
});
var handler = async (event) => {
  const { name, favoriteColor } = JSON.parse(event.body);
  console.log({ name, favoriteColor });
  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favoriteColor,
      message: `My name is ${name} and my favorite color is ${favoriteColor}.`
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=submit.js.map
