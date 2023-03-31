/*

----------------- INPUTS REQUIRED FOR EACH ROUTE ----------------------

----------------- GETS ENDPOINTS ----------------------


                     ----------------------- POKEMONS ------------------------------


----->   http://localhost:3002/pokemons/ 

    No need to pass any parameters. Returns the information of all the pokemons
    

----->   http://localhost:3002/pokemons/feature

    You need to query the variables: "feature", "mayeq" and/or "loweq".
    
    Possible combinations and their results:
        --> only "feature", returns all pokemon with only the indicated feature.
        --> "feature" & "mayeq", returns all pokemon ( with all their information ), filtered by the values greater than or equal to "mayeq" of the indicated "feature".
        --> "feature" & "loweq", returns all pokemon ( with all their information ), filtered by the values less than or equal to "loweq" of the indicated feature.

----->   http://localhost:3002/pokemons/types

    It is required to pass by body an array of objects as set :

        [
            {"name": -fill with existing type-},
            ...,
            {"name": -fill with existing type-}
        ]

----->   http://localhost:3002/pokemons/:id

    It is required to pass by params the ID of the searched pokemon.

                     ----------------------- TYPES ------------------------------

----->   http://localhost:3002/types/ 
    
    No need to pass any parameters. Returns the information of all existing types in the database

----->   http://localhost:3002/types/PokemonsByTypes

    It is required to pass by body an array of objects as set :

        [
            {"name": -fill with existing type-},
            ...,
            {"name": -fill with existing type-}
        ]

----->   http://localhost:3002/types/TypesOfPokemon

    It is required to pass by query the ID of the searched pokemon.

----->   http://localhost:3002/types/:id

    It is required to pass by params the ID of the searched pokemon.



----------------- POSTS ENDPOINTS ---------------------

                     ----------------------- POKEMONS ------------------------------


----->   http://localhost:3002/pokemons/NewPokemon

    An object with the following properties needs to be passed through body:

        {
            "name": -required, must be a string and unique-,
            "image": -optional, fill with a string-,
            "hp": -required, must be a number-,
            "attack": -optional, fill with number-,
            "defense": -optional, fill with number-,
            "special-attack": -optional, fill with number-,
            "special-defense": -optional, fill with number-,
            "speed": -optional, fill with number-,
            "accuaracy": -optional, fill with number-,
            "evasion": -optional, fill with number-,
            "Types":[
                {"name": -fill with existing type-},              
                ... , 
                {"name": -fill with existing type-}
            ]
        }
        
----------------- PUTS ENDPOINTS ---------------------

                     ----------------------- POKEMONS ------------------------------

        
----->   http://localhost:3002/pokemons/:id

    An object with the following properties needs to be passed through body:
        
        {
            "name": -optional, must be a string and unique-,
            "image": -optional,
            "hp": -optional, must be a number-,
            "attack": -optional, fill with number-,
            "defense": -optional, fill with number-,
            "special-attack": -optional, fill with number-,
            "special-defense": -optional, fill with number-,
            "speed": -optional, fill with number-,
            "accuaracy": -optional, fill with number-,
            "evasion": -optional, fill with number-,
        }

                     ----------------------- TYPES ------------------------------

----->   http://localhost:3002/types/addTypeToPokemon

    It is required to pass by query the ID of the searched pokemon.

    It is required to pass by body an array of objects with the types that you want to add as set :

        [
            {"name": -fill with existing type-},
            ...,
            {"name": -fill with existing type-}
        ]

----------------- DELETS ENDPOINTS ---------------------

                     ----------------------- POKEMONS ------------------------------


----->   http://localhost:3002/pokemons/:id

    It is required to pass by params the ID of the searched pokemon.

                     ----------------------- TYPES ------------------------------

----->   http://localhost:3002/types/TypesFromPokemon

    It is required to pass by query the ID of the searched pokemon.

    It is required to pass by body an array of objects with the types that you want to delete as set :

        [
            {"name": -fill with existing type-},
            ...,
            {"name": -fill with existing type-}
        ]


----->   http://localhost:3002/types/AllTypesFromPokemon

    It is required to pass by query the ID of the pokemonof the pokemon you wish to remove all its types.


*/
