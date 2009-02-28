/**
 * Defines which database adapter to use in development, production and test
 */

ExtMVC.Model.prototype.adapter = "REST";

//we want our URLS to end in .json when fetching from the server
ExtMVC.Model.Adapter.REST.classMethods.urlExtension = '.json';