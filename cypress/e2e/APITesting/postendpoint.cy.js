describe("POST Endpoint Testing",()=>{
it('TC007 To verify POST endpoint  returns 200 response code and creates user account for when valid user details provided as JSON format with api key as authorisation header',
    ()=>{
    cy.fixture('data1.json').then((data) => {
        const requestbody=data
cy.request({
method:'POST',
url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
headers:{
      'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
      'content-type':"application/json"
},
body:requestbody
}).then((response)=>{

    expect(response.status).to.eq(200)
    cy.log(response.body.data.userId)
    cy.writeFile('cypress/fixtures/newuseraccount.json', response.body);
})
})
})
it('TC_008 To verify POST endpoint  returns (401) unauthorised error  when valid user details provided as JSON format without api key as authorisation header',
    ()=>{
    cy.fixture('data1.json').then((data) => {
        const requestbody=data
cy.request({
method:'POST',
url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
headers:{
       
      'content-type':"application/json"
},
failOnStatusCode:false,
body:requestbody
}).then((response)=>{

    expect(response.status).to.eq(401)
    
})
})
})
it('TC_009 To verify POST endpoint  returns verify error code 401 (bad token )  when valid user details provided as JSON format with invalid  api key as authorisation header',
    ()=>{
    cy.fixture('data1.json').then((data) => {
        const requestbody=data
cy.request({
method:'POST',
url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
headers:{
       'Authorization'    : 'invalidkey', 
      'content-type':"application/json"
},
failOnStatusCode:false,
body:requestbody
}).then((response)=>{

    expect(response.status).to.eq(401)
    
})
})
})
})
