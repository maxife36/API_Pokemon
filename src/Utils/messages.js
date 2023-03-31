module.exports = {

    //ERROR MESSAGES

    ErrorInvalidID: new Error("No valid ID entered."),
    ErrorFeatuerNotFound: new Error("The entered feature is not correct."),
    ErrorFeatuerNotEntered: new Error("No feature was entered."),
    ErrorOnlyOneComparator: new Error("Only one comparator is accepted at a time."),
    ErrorName: new Error("A name was not entered, or the name is not valid."),
    ErrorNoUniqueName: new Error("There is already a pokemon with that name."),
    ErrorHp: new Error("No hp value was entered, or the hp value is not valid."),
    ErrorInvalidType: new Error("One of the types does not exist"),

    //SUCCESS MESSAGES

    PokeNotFound: "Pokemon not found on DB.",
    PokemonDeleted: "The following pokemon has been successfully removed:\n",
    TypeNotFound: "Type not found on DB.",

}