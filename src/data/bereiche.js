const Fragen = [
    {   
        titel: "Handlungs- und Bewegungssteuerung",
        id: 0,
        active: true, //eine Frage muss initial true sein damit im ebdComponent etwas gezeigt werden kann
        Fragen:[
            {
                id: 0,
                name: 'Frage 1',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 1 Handlungs- und Bewegungssteuerung',
                uebung: 'Übung 1 Handlungs- und Bewegungssteuerung',
                Ergebnis:[
                    {
                    value: 2 //0: Tut es, 1: Tut es nicht, 2: Weiss nicht
                    }
                ]
            },
            {
                id: 1,
                name: 'Frage 2',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 2 Handlungs- und Bewegungssteuerung',
                uebung: 'Übung 2 Handlungs- und Bewegungssteuerung',
                Ergebnis:[
                    {
                    value: 0 //0: Tut es, 1: Tut es nicht, 2: Weiss nicht
                    }
                ]
            },
            {
                id: 2,
                name: 'Frage 3',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 3 Handlungs- und Bewegungssteuerung',
                uebung: 'Übung 3 Handlungs- und Bewegungssteuerung',
                Ergebnis:[
                    {
                    value: 0 //0: Tut es, 1: Tut es nicht, 2: Weiss nicht
                    }
                ]
            },
            {
                id: 3,
                name: 'Frage 4',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 4 Handlungs- und Bewegungssteuerung',
                uebung: 'Übung 4 Handlungs- und Bewegungssteuerung',
                Ergebnis:[
                    {
                    value: 0 //0: Tut es, 1: Tut es nicht, 2: Weiss nicht
                    }
                ]
            },
            {
                id: 4,
                name: 'Frage 5',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 5 Handlungs- und Bewegungssteuerung',
                uebung: 'Übung 5 Handlungs- und Bewegungssteuerung',
                Ergebnis:[
                    {
                    value: 0 //0: Tut es, 1: Tut es nicht, 2: Weiss nicht
                    }
                ]
            },
            {
                id: 5,
                name: 'Frage 6',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 6 Handlungs- und Bewegungssteuerung',
                uebung: 'Übung 6 Handlungs- und Bewegungssteuerung',
                Ergebnis:[
                    {
                    value: 0 //0: Tut es, 1: Tut es nicht, 2: Weiss nicht
                    }
                ]
            },
        ]
    },

    {   
        titel: 'Fein- und Visuomotorik',
        id: 1,
        active: false,
        Fragen:[
            {
                id: 0,
                name: 'Frage 1',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 1 Fein- und Visuomotorik',
                uebung: 'Übung 1 Fein- und Visuomotorik',
            },
            {
                id: 1,
                name: 'Frage 2',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 2 Fein- und Visuomotorik',
                uebung: 'Übung 2 Fein- und Visuomotorik',
            },
            {
                id: 2,
                name: 'Frage 3',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 3 Fein- und Visuomotorik',
                uebung: 'Übung 3 Fein- und Visuomotorik',
            },
            {
                id: 3,
                name: 'Frage 4',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 4 Fein- und Visuomotorik',
                uebung: 'Übung 4 Fein- und Visuomotorik',
            },
            {
                id: 4,
                name: 'Frage 5',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 5 Fein- und Visuomotorik',
                uebung: 'Übung 5 Fein- und Visuomotorik',
            },
            {
                id: 5,
                name: 'Frage 6',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 6 Fein- und Visuomotorik',
                uebung: 'Übung 6 Fein- und Visuomotorik',
            },
        ]
    },
    
    {   
        titel: 'Sprache rezeptiv und expressiv',
        id: 2,
        active: false,
        Fragen:[
            {
                id: 0,
                name: 'Frage 1',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 1 Sprache rezeptiv und expressiv',
                uebung: 'Übung 1 Sprache rezeptiv und expressiv',
            },
            {
                id: 1,
                name: 'Frage 2',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 2 Sprache rezeptiv und expressiv',
                uebung: 'Übung 2 Sprache rezeptiv und expressiv',
            },
            {
                id: 2,
                name: 'Frage 3',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 3 Sprache rezeptiv und expressiv',
                uebung: 'Übung 3 Sprache rezeptiv und expressiv',
            },
            {
                id: 3,
                name: 'Frage 4',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 4 Sprache rezeptiv und expressiv',
                uebung: 'Übung 4 Sprache rezeptiv und expressiv',
            },
            {
                id: 4,
                name: 'Frage 5',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 5 Sprache rezeptiv und expressiv',
                uebung: 'Übung 5 Sprache rezeptiv und expressiv',
            },
            {
                id: 5,
                name: 'Frage 6',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 6 Sprache rezeptiv und expressiv',
                uebung: 'Übung 6 Sprache rezeptiv und expressiv',
            },
        ]
    },
    
    {   
        titel: 'Kognitive Entwicklung',
        id: 3,
        active: false,
        Fragen:[
            {
                id: 0,
                name: 'Frage 1',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 1 Kognitive Entwicklung',
                uebung: 'Übung 1 Kognitive Entwicklung',
            },
            {
                id: 1,
                name: 'Frage 2',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 2 Kognitive Entwicklung',
                uebung: 'Übung 2 Kognitive Entwicklung',
            },
            {
                id: 2,
                name: 'Frage 3',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 3 Kognitive Entwicklung',
                uebung: 'Übung 3 Kognitive Entwicklung',
            },
            {
                id: 3,
                name: 'Frage 4',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 4 Kognitive Entwicklung',
                uebung: 'Übung 4 Kognitive Entwicklung',
            },
            {
                id: 4,
                name: 'Frage 5',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 5 Kognitive Entwicklung',
                uebung: 'Übung 5 Kognitive Entwicklung',
            },
            {
                id: 5,
                name: 'Frage 6',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 6 Kognitive Entwicklung',
                uebung: 'Übung 6 Kognitive Entwicklung',
            },
        ]
    },
    
    {   
        titel: 'Soziale Entwicklung',
        id: 4,
        active: false,
        Fragen:[
            {
                id: 0,
                name: 'Frage 1',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 1 Soziale Entwicklung',
                uebung: 'Übung 1 Soziale Entwicklung',
            },
            {
                id: 1,
                name: 'Frage 2',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 2 Soziale Entwicklung',
                uebung: 'Übung 2 Soziale Entwicklung',
            },
            {
                id: 2,
                name: 'Frage 3',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 3 Soziale Entwicklung',
                uebung: 'Übung 3 Soziale Entwicklung',
            },
            {
                id: 3,
                name: 'Frage 4',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 4 Soziale Entwicklung',
                uebung: 'Übung 4 Soziale Entwicklung',
            },
            {
                id: 4,
                name: 'Frage 5',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 5 Soziale Entwicklung',
                uebung: 'Übung 5 Soziale Entwicklung',
            },
            {
                id: 5,
                name: 'Frage 6',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 6 Soziale Entwicklung',
                uebung: 'Übung 6 Soziale Entwicklung',
            },
        ]
    },
    
    {   
        titel: 'Emotionale Entwicklung',
        id: 5,
        active: false,
        Fragen:[
            {
                id: 0,
                name: 'Frage 1',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 1 Emotionale Entwicklung',
                uebung: 'Übung 1 Emotionale Entwicklung',
            },
            {
                id: 1,
                name: 'Frage 2',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 2 Emotionale Entwicklung',
                uebung: 'Übung 2 Emotionale Entwicklung',
            },
            {
                id: 2,
                name: 'Frage 3',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 3 Emotionale Entwicklung',
                uebung: 'Übung 3 Emotionale Entwicklung',
            },
            {
                id: 3,
                name: 'Frage 4',
                beschreibung: 'Kann Kopf und Brust anheben',
                frage: 'Frage 4 Emotionale Entwicklung',
                uebung: 'Übung 4 Emotionale Entwicklung',
            },
            {
                id: 4,
                name: 'Frage 5',
                beschreibung: 'Liegt symmetrisch auf dem Rücken',
                frage: 'Frage 5 Emotionale Entwicklung',
                uebung: 'Übung 5 Emotionale Entwicklung',
            },
            {
                id: 5,
                name: 'Frage 6',
                beschreibung: 'Kann die Beine strecken',
                frage: 'Frage 6 Emotionale Entwicklung',
                uebung: 'Übung 6 Emotionale Entwicklung',
            },
        ]
    },
]

export default Fragen