describe("User Form App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("sanity checks", () => {
    expect(10).to.equal(10);
    expect(1 + 2).to.equal(3);
    expect({}).to.eql({}); //deep equals, comparing porperties (===)
    expect(1 + 2).to.equal(4 - 1);
  });

  const firstNameInput = () => cy.get('input[name="first_name"]');
  const lastNameInput = () => cy.get('input[name="last_name"]');
  const cheeseCheckbox = () => cy.get('input[name="cheese"]');
  const pepperoniCheckbox = () => cy.get('input[name="pepperoni"]');
  const sausageCheckbox = () => cy.get('input[name="sausage"]');
  const sizeInput = () => cy.get('select[name="size"]');
  const submitButton = () => cy.get("button");

  it("add text to the box", () => {
    firstNameInput()
      .should("have.value", "")
      .type("Joe")
      .should("have.value", "Joe");
    lastNameInput()
      .should("have.value", "")
      .type("Somebody")
      .should("have.value", "Somebody");
  });
  it("can select multiple toppings", () => {
    cheeseCheckbox().should("not.be.checked").click().should("be.checked");
    pepperoniCheckbox().should("not.be.checked").click().should("be.checked");
    sausageCheckbox().should("not.be.checked").click().should("be.checked");
  });
  it("can submit form", () => {
    firstNameInput().type("Joe");
    lastNameInput().type("Somebody");
    sizeInput().select("M");
    cy.get('[type="radio"]').check("classic");
    submitButton().click();
  });
});
