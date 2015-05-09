var data = {
    "links" : [
        {
            "title": "Home",
            "text": "Lyon, France",
            "icon": "home",
            "url": "https://www.google.fr/maps/place/Lyon"
        },
        {
            "title": "Twitter",
            "text": "@b_viguier",
            "icon": "twitter",
            "url": "https://twitter.com/b_viguier"
        },
        {
            "title": "Github",
            "text": "@b-viguier",
            "icon": "github",
            "url": "https://github.com/b-viguier"
        },
        {
            "title": "Linkedin",
            "text": "linkedin.com/in/bviguier",
            "icon": "linkedin",
            "url": "https://fr.linkedin.com/in/bviguier"
        },
        {
            "title": "Resume",
            "text": "CV",
            "icon": "file",
            "url": "data/CV_Viguier__public.pdf"
        }
    ],
    "talks": [
        {
            "title": "Jamais trop tôt pour le cloud",
            "url": "downloads/talks/Afup-NeverTooYoung4Cloud.pdf",
            "date": date(6, 5, 2015),
            "event": "Afup",
            "event_url": "http://lyon.afup.org/2015/04/13/conference-sur-aws-le-6-mai-a-19h/"
        },
        {
            "title": "El framework de la muerte",
            "url": "downloads/talks/HumanTalks-ElFrameworkDeLaMuerte.pdf",
            "date": date(9, 12, 2014),
            "event": "HumanTalks",
            "event_url": "http://humantalks.com/talks/534-el-framework-de-la-muerte"
        },
        {
            "title": "Faire coder les candidats en pre-entretien: bilan",
            "url": "downloads/talks/HumanTalks-TestTechTel.pdf",
            "date": date(18, 11, 2014),
            "event": "HumanTalks",
            "event_url": "http://humantalks.com/talks/508-faire-coder-les-candidats-en-pre-entretien-bilan"
        },
        {
            "title": "Mercurial: l'autre DVCS",
            "url": "https://bitbucket.org/benoit_viguier/hg-slideshow",
            "date": date(14, 10, 2014),
            "event": "HumanTalks",
            "event_url": "http://www.lyonjug.org/evenements/docker"
        }
    ]
};

function date(day, month, year)
{
    return (new Date(year, month, day)).toLocaleDateString(
        "fr-FR",
        {year: "numeric", month: "short", day: "numeric"}
    );
}

$(function() {
    $("#links-section").html(
        Hogan.compile($("#links-template").text()).render(data)
    );

    $("#talks-section").html(
        Hogan.compile($("#talks-template").text()).render(data)
    );
});