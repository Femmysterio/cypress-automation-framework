/// <reference types="cypress" />

describe("JSON Object", () => {
    it ("Json Object Example", () => {
        const exampleObject = {"key": "Femi", "key2": "Orungbeja"}
        const exampleArrayOfValues = ["Olamiposi", "Amanda", "Norah"]
        const exampleArrayOfObjects = [{"key": "Olamiposi"}, {"key2": "Morenikeji"}, {"key3": 5}]

        const users = {
            "firstName" : "Olamiposi",
            "lastName" : "Orungbeja",
            "Age" : 5,
            "Students" : [
                {
                    "firstName" : "Oluwafemi",
                    "lastName": "Olajide",
                },
                {
                    "firstName" : "Oluwatosin",
                    "lastName": "Deborah", 
                }
            ]
        }

        cy.log(exampleObject["key"]); //Femi
        cy.log(exampleObject["key2"]); //Orungbeja
        cy.log(exampleObject.key) //Femi

        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[1]);

        cy.log(users.Students[0].lastName);

        cy.log(exampleArrayOfObjects[0].key);
        cy.log(exampleArrayOfObjects[1].key2);
        cy.log(exampleArrayOfObjects[2].key3);
    })
})