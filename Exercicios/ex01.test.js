import{
    assertNotEquals,
    assertMatch,
    assertInstanceOf,
} from "http://deno.land/std/testing/asserts.ts";


let teste1 = 'oi'

Deno.test("Teste não é oi", () => {
    assertNotEquals(teste1, "oi");
})

let teste2 = '!' 

Deno.test("Teste de carácteres", () =>{
    assertMatch(teste2, "!");
})

let teste3 = 23

Deno.test("teste de tipo", () =>{
    assertInstance(2, teste3);
})

    