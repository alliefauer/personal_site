export const projectPage = {
    headplanters: {
        title: "Head Planters",
        subtitle: "3D Printing",
        sidebar: [
            ["Software", ["Rhino", "Skanect"]],
            ["Technologies", ["3D Printing", "3D Scanning", "3D Modeling"]],
            ["Media", [["SolidSmack" , "https://www.solidsmack.com/cooltools/cool-tools-doom-n-stuff-week-03-15/"]]],
            ["Tutorial", [["Instructables" , "https://www.instructables.com/id/3D-Printed-Head-Planters/"]]]
        ],
        about: ["Some say that it's hard to find beauty and brains, but what if you could have beauty where the brains should be? These planters were created by 3D scanning myself along with a few of my friends using an Xbox Kinect. The scans were then imported into Rhino, edited and turned into planters using 3D printing.", "This project won Second Prize in Instructables.com's Indoor Gardening Contest and was a Runner Up in Instructables.com's 3D Design Contest sponsored by Dremel in 2014."],
        sections : [
            [{image: "images/planterallie.jpg"}, {image: "images/plantergif2.gif"}, {image: "images/planterjohn.jpg"}],
            [{image: "images/plantergif1.gif"}, {image: "images/planterlaura.jpg"}, {image: "images/plantergif3.gif"}]
        ],
        mainImage: "images/headplanterscover.jpg",
        colors: ["#80002a", "#999999", "#cc0044"]
    },
    pictureframe: {
        title: "Location Sensing Picture Frame",
        subtitle: "Arduino",
        sidebar: [
            ["Software", ["Arduino", "CloudMQTT", "OwnTracks", "Adobe Creative Suite"]],
            ["Hardware", ["Intel Edison", "LED Strip"]],
            ["Media", [["Adafruit" , "https://blog.adafruit.com/2015/11/09/iot-location-sensing-picture-frame/"]]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/IoT-Location-Sensing-Picture-Frame/"]]]
        ],
        about: ["\"Text me when you're heading home.\" We've all heard it, and we've all forgotten to do it. Sometimes, even when we do remember to text, the unexpected happens. We get stuck in traffic, get caught up talking to a co-worker while trying to leave the office, or suddenly remember that we should stop to get that one thing we really need at the store. These events can be hard to communicate, and frustrating for family members who are trying to time their activities around your arrival at home.", "To make communication easier, I've created the IoT Location Sensing Picture Frame. The concept is simple. Each family member has a photo of themselves in the picture frame. Each photo has a corresponding strip of lights that is controlled by an app that runs in the background of the designated family member's smart phone (yes...each family member having a smart phone is a pre-requisite for this project.). The lights are programmed to display colors in a spectrum ranging from red to green. If the lights for a certain family member are red, it means that they are far away from home. If the lights are green, it means that they are home. If the lights have been orange for a while, but you notice that they are slowly fading to yellow, the family member is traveling closer to home and the lights will continue to fade to green until that family member arrives at home.", "This project was a runner up in the Intel IoT Invitational on Instructables.com in 2015."],
        sections : [
            [{video: "https://www.youtube.com/embed/iOFXJysHMkc"}]
        ],
        mainImage: "images/pictureframecover.jpg",
        colors: ["#009933", "#262626", "#00b33c"]
    },
    iceskate: {
        title: "Ice Skate Ornament",
        subtitle: "3D Printing",
        sidebar: [
            ["Software", ["Rhino"]],
            ["Technologies", ["3D Modeling", "3D Printing"]],
            ["Media", [["Design News" , "https://www.designnews.com/content/slideshow-makers-decorate-white-house-holidays/page/1/0"], ["3D Printing Industry" : "https://3dprintingindustry.com/news/20-3d-printed-holiday-ornaments-instructables-white-house-challenge-36659/"]]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/3D-Printed-Ice-Skate-Ornament/"]]]
        ],
        about: ["This was my design for the first ever 3D Printed Ornament Design Challenge sponsored by the White House and Smithsonian. Out of approximately 300 entries, this design was chosen as one of 20 finalists in the contest."],
        sections : [
            [{image: "images/iceskateall.jpg"}]
        ],
        mainImage: "images/iceskatecover.jpg",
        colors: ["#0d1a00", "grey", "#4d9900"]
    },
    taskly: {
        title: "Taskly",
        subtitle: "UX + UI Desgin",
        sidebar: [
            ["Software", ["Adobe Creative Suite", "UXPin"]],
            ["Processes", ["User Personas", "User Testing", "Wireframing", "UI Design"]],
        ],
        about: ["Coming soon"],
        sections : [
            [{image: "images/tasklyuserpersona1.jpg"}, {image: "images/tasklyuserpersona2.jpg"}, {image: "images/tasklyuserpersona3.jpg"}]
        ],
        mainImage: "images/tasklywide.jpg",
        colors: ["#004d66", "#999999"]
    },
    remembrall: {
        title: "Internet Connected Remembrall",
        subtitle: "Arduino",
        sidebar: [
            ["Software", ["Arduino", "Particle Build", "Todoist API", "MATLAB", "ThingSpeak", "IFTTT"]],
            ["Hardware", ["Spark Core", "LEDs"]],
            ["Media", [["Popular Science" , "http://www.popsci.com/real-life-remembrall"],["Interesting Engineering", "https://interestingengineering.com/diy-remembrall-harry-potter/"],["MathWorks", "http://blogs.mathworks.com/iot/2016/09/09/use-matlab-to-analyze-your-tasks/"],["Hackster.io", "https://blog.hackster.io/a-remembrall-that-actually-works-9d87c53a0641#.hrrwlnslj"]]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/Internet-Connected-Remembrall/"]]]
        ],
        about: ["Any die-hard Harry Potter fan will remember Neville Longbottom's Remembrall. This object is described as a small, glass ball that fills with red smoke when its owner has forgotten something. Unfortunately, the Remembrall doesn't inform the owner about what they have forgotten, rendering the item fairly useless.", "Because I seem to have a knack for creating useless things, I decided to create a Remembrall that ACTUALLY WORKS!!!!! This Internet Connected Remembrall functions alongside Todoist, which is a web and mobile to-do list application. After gathering the owner's data, the Remembrall turns red if due dates of uncompleted tasks have passed. While I will admit that my Remembrall isn't quite as useless as Neville's, it is sure to leave it's owner in a state of panic as they try to figure out what they have forgotten (or at least I hope it does!)."],
        sections : [
            [{image: "images/remembrall1.jpg"}, {image: "images/remembrallgif.gif"}]
        ],
        mainImage: "images/remembrallcover.jpg",
        colors: ["#4d0000", "#999999", "#b30000"]
    },
    coco: {
        title: "Coco Fantasy",
        subtitle: "Packaging Design",
        sidebar: [
            ["Software", ["Adobe Creative Suite"]],
        ],
        about: ["'Coco Fantasy' is a fictional brand of chocolate playing on the dreamy, magical sensation that one gets while consuming chocolate.", "The packaging has been designed for three flavors, 'Magical Milk Chocolate', 'Dreamy Dark Chocolate', and 'Wondrous White Chocolate'. Overall, the brand has a fun, light-hearted feel, and has a color pallet that stands out from most other chocolate brands."],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/cocowide.jpg",
        colors: ["#99003d", "#999999"]
    },
    sweet: {
        title: "Sweet Infographic Book",
        subtitle: "Graphic Design",
        sidebar: [
            ["Software", ["Adobe Creative Suite"]],
        ],
        about: ["Sweet! is a book about all things sugary, including but not limited to ice cream, cookies and candy. This book describes the history of these products through both text and info-graphics. This book was designed using Illustrator, InDesign, and printed using Blurb.com. In total, Sweet! contains 60 pages jam packed with colorful graphics, charts and pictures. Pictured here are some of my favorites!"],
        sections : [
            [{image: "images/sweet1.jpg"}, {image: "images/sweet2.jpg"}],
            [{image: "images/sweet3.jpg"}, {image: "images/sweet4.jpg"}],

        ],
        mainImage: "images/sweetwide.jpg",
        colors: ["#4d9900", "#333333", "#4d9900"]
    },
    train: {
        title: "Train Overlook",
        subtitle: "3D Rendering",
        sidebar: [
            ["Software", ["3D Studio Max", "Mental Ray", "Adobe Creative Suite"]],
            ["Technologies", ["3D Modeling", "3D Rendering"]],
        ],
        about: ["This rendering and video was created for an Architectural Visualization class I took while in college. The rendering depicts a shelter located over the train tracks behind the Fox Building at the Maryland Institute College of Art. The intention of the shelter was to provide a peaceful sanctuary for students to sit and watch the trains go by."],
        sections : [
            [{video: "                                             https://player.vimeo.com/video/72018629"}]
        ],
        mainImage: "images/trainwide.jpg",
        colors: ["#29293d", "grey"]
    },  
    leash: {
        title: "LED Dog Leash",
        subtitle: "Electronics",
        sidebar: [
            ["Hardware", ["LEDs"]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/LED-Dog-Leash/"]]]
        ],
        about: ["Winter months bring cold weather along with shorter days and earlier sunsets. While this causes me to want to hide in my house under a gigantic blanket, it does not stop my Dad and my 13 year old Cockapoo Toby from going on long walks in the cold after dark.", "Recently I was driving home at night and I realized how dark our neighborhood truly is. There are no street lights and cars like to speed up and down the curved roads. While my dad wears a reflective vest so he can be easily spotted by cars, I worry about Toby getting hit as he is not as visible. I made this dog leash as a gift for my Dad to help Toby stay safer on their walks.", "This project was a runner up in the 'Make it Glow!' contest on Instructables.com in 2015"],
        sections : [
            [{image: "images/leash1.jpg"}, {image: "images/leash2.jpg"}]
        ],
        mainImage: "images/leashcover.jpg",
        colors: ["#00394d", "#999999", "#0086b3"]
    }, 
    shelter: {
        title: "Folding Shelter",
        subtitle: "Digital Fabrication",
        sidebar: [
            ["Software", ["Rhino", "RhinoCAM"]],
            ["Technologies", ["3D Modeling", "CNC"]]
        ],
        about: ["Made from plywood and fabric, this shelter is able to fold in an accordion-like fashion, to be completely flat. While in this collapsed position, the shelter can easily be carried by one person.", "To create this shelter, digital design and fabrication process were utilized. The shelter first 3d modeled in Rhino, and later pieces were CNC milled from tool paths generated using RhinoCAM. The ribs providing the structure of the shelter were CNC milled out of 1/4\" plywood, and the outside shell was CNC milled out of fabric using a knife attachment. The fabric was then hand stitched onto the wooden ribs to complete the structure.", "This project was a collaboration with Rachel Yalisove, Kymberly Day, and Nick Oster."],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/shelterwide.jpg",
        colors: ["#527a7a", "grey"]
    },
    magicwand: {
        title: "Magic Wand",
        subtitle: "Arduino",
        sidebar: [
            ["Software", ["Arduino", "Rhino"]],
            ["Hardware", ["Arduino Micro", "MPU6050 Accelerometer", "IR LED"]],
            ["Technologies", ["3D Modeling", "3D Printing"]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/Magic-Wand-TV-Remote/"]]]
        ],
        about: ["Modeled after the Kymera Wand, I designed, programmed and built a fully functional Magic Wand TV Remote. In case you are not familiar with the Kymera Wand, a Magic Wand TV Remote functions without pressing any buttons. By waving the wand in different ways, different commands are sent to your television. Using Arduino, I have programmed my Magic Wand TV Remote to turn the TV and cable on and off, control HDMI functions, and to turn volume and channels up and down.", "This project won First Prize in Instructable.com's Enchanted Object Contest sponsered by Spark IO."],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/magicwandcover.jpg",
        colors: ["#804d00", "grey"]
    },  
    tea: {
        title: "Just Tea",
        subtitle: "Packaging Design",
        sidebar: [
            ["Software", ["Adobe Creative Suite"]],
        ],
        about: ["This project was a redesign of Wegmans' brand Just Tea. The goal of the new packaging was to create an identity for the brand that both stood out on the shelves, and was more exciting for customers to interact with.", "The existing branding for Just Tea used a very generic color palette and unclear typography making the packaging generally unfriendly and not memorable. To address these issues, I gave the brand a new color palette, using black along with a secondary color to differentiate each flavor. A subtle gradation was used on the bottom portion on the box that becomes evident as the top is being removed. I also created a simplified logo using the intersection between the two 't's' in the brand name, Just Tea."],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/teawide.jpg",
        colors: ["#669900", "grey"]
    },
    pez: {
        title: "Personalized Pez Dispensers",
        subtitle: "3D Printing",
        sidebar: [
            ["Software", ["Rhino", "Skanect"]],
            ["Technologies", ["3D Printing", "3D Scanning", "3D Modeling"]],
            ["Media", [["SolidSmack" , "https://www.solidsmack.com/cooltools/cool-tools-of-doom-n-stuff-week-26-15/"]]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/Personalized-3D-Printed-PEZ-Dispensers/"]]]
        ],
        about: ["I utilized 3D scanning and 3D printing technologies to create custom Pez Dispensers of friends and family members. "],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/pezwide.jpg",
        colors: ["#ff80aa", "grey"]
    },
    necklaces: {
        title: "Laser Cut Necklaces",
        subtitle: "Digital Fabrication",
        sidebar: [
            ["Software", ["Adobe Creative Suite"]],
            ["Technologies", ["Laser Cutting"]],
            ["Media", [["Just Add Sharks" , "http://www.justaddsharks.co.uk/blogs/2016-04-13/recycling-laminate-into-laser-cut-jewellery"]]],
            ["Tutorial", [["Instructables" , "http://www.instructables.com/id/Laser-Cut-Necklaces-from-Recycled-Laminate-Samples/"]]]
        ],
        about: ["During my senior year of college, I worked one day a week at an Interior Design Studio. While there, my primary job was working as the 'Material Librarian', organizing the Studio's material library and throwing out any outdated or duplicate samples. Despite getting rid of many samples, I held onto many that felt particularly drawn to. I started collecting old laminate samples, quickly filling the shelves in my tiny dorm room. As my collection grew, I knew I had to find something to do with the samples. Between my need to find a use for my collection and a new found love for Digital Fabrication, these colorful geometric necklaces were born!"],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/necklacewide.jpg",
        colors: ["#0f1f3d", "grey"]
    }, 
    lovell: {
        title: "Lovell Health House",
        subtitle: "3D Rendering",
        sidebar: [
            ["Software", ["3D Studio Max", "Mental Ray", "Adobe Creative Suite"]],
            ["Technologies", ["3D Modeling", "3D Rendering"]],
        ],
        about: ["This project was a digital reconstruction of Richard Neutra's Lovell Health House located in Los Angeles, California. Using the existing floor plans, the modeling of the house was completed using 3D Studio Max and Mental Ray Rendering."],
        sections : [
            ["images/iceskateall.jpg"]
        ],
        mainImage: "images/lovellwide.jpg",
        colors: ["#336699", "grey"]
    },
}