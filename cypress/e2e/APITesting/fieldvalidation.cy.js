describe("Field Validation Testing",()=>{
    
    it('TC_010 To verify the  title to be of one of valid values - “Mr,” “Mrs,” “Miss,” “Ms,” and “Mx.” ',()=>{
    cy.fixture('useraccount1.json').then((data)=>{
    cy.request({
        method:'GET',
        url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/b9f40dd8-3cbb-454f-85b8-84482e4cb69b",
        headers:{
    
            'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
            'content-type':"application/json"
        }
    }).then((response)=>{
        
        expect(response.body.data.title).to.be.oneOf(['Mr', 'Mrs', 'Miss', 'Ms', 'Mx'])

    })
    })
    })
    it('TC_011 To verify the title field for new user creation is non mandatory field',
        ()=>{
        cy.fixture('td_001.json').then((data) => {
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
        
    })
    })
    })
    it('TC_012 To verify the title field for new user creation is non mandatory field',
        ()=>{
        cy.fixture('td_001.json').then((data) => {
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
        
    })
    })
    })
    it('TC_013 To verify the user account creation when valid data for fields first name,last name - 2 chars,dateofbirth,email address,password,rating provided', 
       
        ()=>{
        cy.fixture('td_002.json').then((data) => {
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
        // const lengthfirstname = response.body.data.firstName.length;
        // cy.log(lengthfirstname)
        expect(response.status).to.eq(200)
        //expect(lengthfirstname).to.be.within(2, 255);
        //expect(lengthfirstname).to.eq(2);
        
    })
    })
    })
    it('TC_014 To verify the user  account creation when input field - first name and last name is 255 characters ',
        ()=>{
        cy.fixture('td_003.json').then((data) => {
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
       // const lengthfirstname = response.body.data.firstName.length;
        expect(response.status).to.eq(200)
    //    expect(lengthfirstname).to.eq(255);
        
    })
    })
    })
    it('TC_015 To verify the user account if not created when field first name is not provided to check if it’s a  mandatory field ',
        ()=>{
        cy.fixture('td_004.json').then((data) => {
            const requestbody=data
    cy.request({
    method:'POST',
    url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
    headers:{
          'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
          'content-type':"application/json"
    },
    failOnStatusCode:false,
    body:requestbody
    }).then((response)=>{
       
        expect(response.status).to.eq(400)
  
        
    })
    })
    })
    it('TC_015 To verify the user account if not created when field last name is not provided to check if it’s a  mandatory field ',
        ()=>{
        cy.fixture('td_005.json').then((data) => {
            const requestbody=data
    cy.request({
    method:'POST',
    url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
    headers:{
          'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
          'content-type':"application/json"
    },
    failOnStatusCode:false,
    body:requestbody
    }).then((response)=>{
       
        expect(response.status).to.eq(400)
  
        
    })
    })
    })
    it('TC_016 To verify the user  account not creation when input field - first name is 1 character ',
        ()=>{
        cy.fixture('td_006.json').then((data) => {
            const requestbody=data
    cy.request({
    method:'POST',
    url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
    headers:{
          'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
          'content-type':"application/json"
    },
    failOnStatusCode:false,
    body:requestbody
    }).then((response)=>{
       
        expect(response.status).to.eq(400)
  
        
    })
    })
    })
    it('TC_016 To verify the user  account not creation when input field - last name is 1 character ',
        ()=>{
        cy.fixture('td_007.json').then((data) => {
            const requestbody=data
    cy.request({
    method:'POST',
    url:'https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users',
    headers:{
          'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
          'content-type':"application/json"
    },
    failOnStatusCode:false,
    body:requestbody
    }).then((response)=>{
       
        expect(response.status).to.eq(400)
  
        
    })
    })
    })
})