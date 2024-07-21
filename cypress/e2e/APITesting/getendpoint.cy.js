

describe("GET Endpoint Testing",()=>{

it("TC_001 To verify 200 response code when valid user id is provided in the endpoint ",()=>{
cy.request({

    method:'GET',
    url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/b9f40dd8-3cbb-454f-85b8-84482e4cb69b",
    headers:{

        'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
        'content-type':"application/json"
    }
}).its('status')
.should('equal', 200)
})
it("TC_002 To verify user account details when valid user id is provided in the endpoint ",()=>{
cy.fixture('useraccount1.json').then((data)=>{
cy.request({
    method:'GET',
    url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/b9f40dd8-3cbb-454f-85b8-84482e4cb69b",
    headers:{

        'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
        'content-type':"application/json"
    }
}).its('body')
.should('to.deep.equal', data)
})
})
it("TC_003 To verify error code 403 (forbidden) when no user id provided to retrived user account details",()=>{
    cy.fixture('useraccount1.json').then((data)=>{
    cy.request({
        method:'GET',
        url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/",
        headers:{
    
            'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
            'content-type':"application/json"
        },
        failOnStatusCode:false
    }).its('status')
    .should('equal', 403)
    })
    })
    it("TC_004 To verify error code 400 (bad request) non existing user id is used to retrieve user account details",()=>{
        cy.fixture('useraccount1.json').then((data)=>{
        cy.request({
            method:'GET',
            url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/b9f40dd8-3cbb-454f-85b8-84482e4cb6",
            headers:{
        
                'Authorization'    : 'GombImxOhMCa8AqMmNM9KEFwaSHSFHty',  
                'content-type':"application/json"
            },
            failOnStatusCode:false
        }).its('status')
        .should('equal', 400)
        })
        })   
        it("TC_005 To verify error code 401 (unauthorised) when valid user id is provided to  retrieve user account details without api key",()=>{
            cy.fixture('useraccount1.json').then((data)=>{
            cy.request({
                method:'GET',
                url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/b9f40dd8-3cbb-454f-85b8-84482e4cb6",
                headers:{
                    'content-type':"application/json"
                },
                failOnStatusCode:false
            }).its('status')
            .should('equal', 401)
            })
            }) 
            it("TC_006 To verify error code 401 (bad token ) when valid user id is provided to  retrieve user account details with invalid api key",()=>{
                cy.fixture('useraccount1.json').then((data)=>{
                cy.request({
                    method:'GET',
                    url:"https://mzo5slmo45.execute-api.eu-west-2.amazonaws.com/v1/users/b9f40dd8-3cbb-454f-85b8-84482e4cb69b",
                    headers:{
                        'content-type':"application/json",
                        'Authorization'    : 'invalidkey',  
                    },
                    failOnStatusCode:false
                }).its('status')
                .should('equal', 401)
                })
                })                 
})
