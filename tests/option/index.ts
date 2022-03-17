import some from "./suite/some.test";
import none from "./suite/none.test";
import methods from "./suite/methods.test";
import cast from "./suite/cast.test";
import safe from "./suite/safe.test";
import all from "./suite/all.test";
import any from "./suite/any.test";

export default function option() {
   describe("Some<T>", some);
   describe("None", none);
   describe("Methods", methods);
   describe("Cast", cast);
   describe("Option.safe", safe);
   describe("Option.all", all);
   describe("Option.any", any);
}
