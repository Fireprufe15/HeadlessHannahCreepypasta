var storyItems = [
    {
        type: "expo",
        message:"Written by a Secret Santa, for /u/Creedismyhero"
    },
    {
        type: "expo",
        message:"Based on a story I was told a very long time ago..."
    },
    {
        type: "expo",
        message:"Reading with sound (preferably headphones) is recommended, however, it is not mandatory (and if you are on mobile probably wont work). " +
        "Do you want sound?   ",
        trigger: "askSound"
    },
    {
        type: "expo",
        message:"In the year 2017, ten teenagers attending a school camp entered a forest. " +
        "Witnesses say that they were terrified of something, running screaming into the forest. " +
        "They were never seen again. Investigators, while searching for the missing students, weren't able to find anything " +
        "or anyone. One person, who was not at the camp, handed a chat log over to the detectives. She claims that she was " +
        "talking to one of the teens who went missing. " +
        "This is that chat log...",
        trigger: "musicStart"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Idk what to do help me please"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Whats up?"
    },
    {
        type: "msg",
        sender: "Sarah",
        message: "You know we are at the camp thing, right?"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Don't rub it in, it sucks that I'm missing out"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "No there's shit going down"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "What kind of shit?"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Someone was banging on our cabin windows, " +
        "I couldn't really make the person out but they had this bloody knife"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "So we all just noped out and ran in the opposite direction"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "That sounds terrifying, are you safe now?"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "NO"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "What does that mean?"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "SARAH? Answer me!"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Sarah this isn't funny..."
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Dammit don't do this to me!"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Sorry"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "That thing was close"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "had to run again"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "its some creepy girl in a white sheet"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "theres like blood coming out of her neck"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Sounds like some idiot is pranking you"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "you sure it isn't some of the idiot guys?"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "no this is legit shit"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "that wasn't fake blood"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Are you far away now?"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "I think so. we ran into the forest"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "I'm hiding in a bush"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "stay put, don't move"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "SHIT"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "i heard a scream...I think someone is dead."
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "I can hear footsteps....",
        trigger: "playFootsteps"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "stay quiet! don't even breathe!"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "I think it is gone..."
    },
    {
        type: "msg",
        sender:"Lena",
        message: "make sure before you move, it may be waiting"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Can't see her or hear her, I think we're good."
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "I'm gonna make a run for it"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "coast seems to be clear. im running on 3"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "3"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "2"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "this is a terrible idea"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "1"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Sarah?"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "Did you get away?"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "WHERE ARE YOU?"
    },
    {
        type: "expo",
        message:"Sarah didn't respond. Not for weeks. Detectives found nothing. The case went cold."
    },
    {
        type: "expo",
        message:"10 Weeks Later"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Come get me"
    },
    {
        type: "msg",
        sender:"Lena",
        message: "SARAH?! You are alive?? Is this some kind of sick joke?"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "I'm still in the forest. I'm stuck. Come save me."
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Don't wait too long..."
    },
    {
        type: "expo",
        message:"THE END"
    },
    {
        type: "expo",
        message: "Credits: Music: Ghost Story by Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 3.0.  " +
        "Sound Effects: Youtube SFX library.  Writing and Coding: Santa Clause"
    },
    {
        type: "expo",
        message: "Merry XMas from your Secret Santa"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "GrrrrRrhwaaaaaaaAAaaa"
    },
    {
        type: "msg",
        sender:"Sarah",
        message: "Goodnight..........."
    },
];
