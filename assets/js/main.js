//CodeFlow Übung lev1_2: Objects
console.log('CodeFlow Übung lev1_2: Objects')

const person = {
    name: 'Magnuspool',
    age: 32,
    sagNameAlter: function () {
        console.log(this.name, this.age)
        //alert(this.name + ' ' + this.age)
    }
}

person.sagNameAlter()

console.log('=============================')


//CodeFlow Übung lev1_4: Objects Accessing
console.log('CodeFlow Übung lev1_4: Objects Accessing')

let unsereHaustiere = [ {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"]
    },
    {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"]
    },

]
console.log(unsereHaustiere[0].names[1])
console.log(unsereHaustiere[1].names[2])

for (let i in unsereHaustiere) {
    console.log(i, unsereHaustiere[i].names)
    
} 

/* for (let i in unsereHaustiere) {
    unsereHaustiere[1].names[0] = 'balu'
    unsereHaustiere[1].names[1] = 'Snoopy'
    console.log(unsereHaustiere[1].names[i])
}  */

console.log('=============================')




//CodeFlow Übung lev1_4: Objects Accessing
console.log('CodeFlow Übung lev1_4: Objects Accessing')


let unserLager = {
    schreibtisch: {
    schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
    },
        "Untere Schublade": "Cola"
    },

}

console.log(unserLager.schrank["Obere Schublade"].Ordner2)
console.log(unserLager.schrank["Untere Schublade"])
console.log(unserLager.schreibtisch.schublade)

console.log('=============================')



//CodeFlow Übung lev1_6: Objects Arrays Accessing
console.log('CodeFlow Übung lev1_6: Objects Arrays Accessing')

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill 'Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
]

let myFavArtist =  {
    artist: "The Black Keys",
    title: "Everlasting Light",
    release_year: 2010,
    medium: ["LP", "CD", "MC", "Download"],
    gold: false
}
console.log(myMusic.push(myFavArtist))

console.log(myMusic)

console.log(myMusic[0].artist)
console.log(myMusic[1].medium[3])
console.log(myMusic[1].gold)
console.log(myMusic[2].release_year)
console.log(myMusic[3].release_year)
console.log(myMusic[0].medium[2])
console.log(myMusic[3].title.slice(17,21))
console.log(myMusic[2].title.slice(13,16))
console.log(myMusic[1].artist.slice(-5))



console.log('=============================')



//CodeFlow Übung lev1_7: Objects Arrays Loop Accessing
console.log('CodeFlow Übung lev1_7: Objects Arrays Loop Accessing')


let myMusic2 = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill 'Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
]



console.log('=============================')
