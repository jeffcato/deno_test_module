import { assertEquals } from "./dev_deps.ts";
import { prod, sum } from "./mod.ts";

Deno.test({
  name: "sum",
  fn() {
    assertEquals(sum(1, 2), 3);
  },
});

Deno.test({
  name: "prod",
  fn() {
    assertEquals(prod(1, 2), 2);
  },
});
