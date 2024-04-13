const TechObj = [
    {
        "IMG": "https://cdn.mycplus.com/mycplus/wp-content/uploads/2009/02/programming-languages.jpg",
        "id": "1",
        "courseName": "Programming Languages",
        "channel": "",
        "courseLink": "https://www.simplilearn.com/best-programming-languages-start-learning-today-article"
    },
    {
        "IMG": "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
        "id": "2",
        "courseName": "Web Development",
        "channel": "",
        "courseLink": "https://www.geeksforgeeks.org/web-development/"
    },
    {
        "IMG": "https://blog.tech2globe.com/wp-content/uploads/2022/10/data_management-02-1.jpg",
        "id": "3",
        "courseName": "Database Management",
        "channel": "",
        "courseLink": "https://www.appdynamics.com/topics/database-management-systems#"
    },
    {
        "IMG": "https://miro.medium.com/v2/resize:fit:640/1*evrS1fJj-8-RjZN5tjiYDg.jpeg",
        "id": "4",
        "courseName": "Operating Systems",
        "channel": "",
        "courseLink": "https://www.techtarget.com/whatis/definition/operating-system-OS"
    },
    {
        "IMG": "https://st.adda247.com/https://www.careerpower.in/blog/wp-content/uploads/sites/2/2023/07/21160517/Computer-Network.png",
        "id": "5",
        "courseName": "Computer Networks",
        "channel": "",
        "courseLink": "https://aws.amazon.com/what-is/computer-networking/#"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11RUtmn9wqDQ4HwjuIAME6RJBmKr5Wku3-wTEJLkQAMmP6kxVSWJ9tlmfRhxUNJP36C8&usqp=CAU",
        "id": "6",
        "courseName": "Data Structures & Algorithms",
        "channel": "",
        "courseLink": "https://www.w3schools.com/dsa/dsa_intro.php"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELExFOtGOiXuEgDjA6ArkD4smJByNdXf7DZH9a-0NCy76Be6jjZJmULJLS0gF_ChyEf4&usqp=CAU",
        "id": "7",
        "courseName": "Artificial Intelligence",
        "channel": "",
        "courseLink": "https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence#"
    },
    {
        "IMG": "https://assets-global.website-files.com/611b8930015cb4be59160e08/61a5e221adc0d6298f9add5d_machinelearning.jpeg",
        "id": "8",
        "courseName": "Machine Learning",
        "channel": "",
        "courseLink": "https://www.ibm.com/topics/machine-learning"
    },
    {
        "IMG": "https://datarundown.com/wp-content/uploads/2023/05/Model-Data-Analytics.jpg",
        "id": "9",
        "courseName": "Data Analytics",
        "channel": "",
        "courseLink": "https://aws.amazon.com/what-is/data-analytics/#"
    },
    {
        "IMG": "https://artoftesting.com/wp-content/uploads/2020/01/software-engineering-featured.jpg",
        "id": "10",
        "courseName": "Software Engineering",
        "channel": "",
        "courseLink": "https://www.mtu.edu/cs/undergraduate/software/what/#:~:text=Software%20engineering%20is%20the%20branch,software%20solutions%20for%20end%20users."
    },
    {
        "IMG": "https://www.analyticsinsight.net/wp-content/uploads/2023/06/Exploring-the-opportunities-of-AI-in-computer-graphics.jpg",
        "courseName": "Computer Graphics",
        "channel": "",
        "courseLink": "https://www.coursera.org/articles/computer-graphics"
    },
    {
        "IMG": "https://www.bbvaopenmind.com/wp-content/uploads/2023/03/BBVA-OpenMind-Banafa-Future-of-Cybersecurity.jpg",
        "id": "12",
        "courseName": "Cybersecurity",
        "channel": "",
        "courseLink": "https://www.techtarget.com/searchsecurity/definition/cybersecurity#:~:text=Cybersecurity%20is%20the%20practice%20of,centers%20and%20other%20computerized%20systems."
    },
    {
        "IMG": "https://cdn.educba.com/academy/wp-content/uploads/2020/05/Software-Reliability.jpg",
        "id": "13",
        "courseName": "Software Reliability",
        "channel": "",
        "courseLink": "https://www.javatpoint.com/software-engineering-software-reliability"
    },
    {
        "IMG": "https://media.licdn.com/dms/image/D5612AQG1Xt15-Al_sw/article-cover_image-shrink_600_2000/0/1680048173047?e=2147483647&v=beta&t=cWPa3v6-wC5dwkLq_6vdNxNDP7VgqYEHkqh3AMt2DYg",
        "id": "14",
        "courseName": "VLSI Design",
        "channel": "",
        "courseLink": "https://www.linkedin.com/pulse/introduction-vlsi-design-ramya-easwaran"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlDe73dRCQljMqWlQ0ehc36QISxsVJTR_3ntArZrGicfJgsDT2sRcoMTuqoJHJlJ8Wvs&usqp=CAU",
        "id": "15",
        "courseName": "Robotics",
        "channel": "",
        "courseLink": "https://formant.io/robotics/#"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tskjSb-OWsE_BA8hSCkL0rhvXSbQ7tIqAwjL8gY7rsZtL0n5jQMLmOZGUsHujngscVo&usqp=CAU",
        "id": "16",
        "courseName": "Full Stack Programming",
        "channel": "",
        "courseLink": "https://www.mongodb.com/languages/full-stack-development#"
    },
    {
        "IMG": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Big-Data-and-Analytics.jpg",
        "id": "17",
        "courseName": "Big Data",
        "channel": "",
        "courseLink": "https://cloud.google.com/learn/what-is-big-data#:~:text=Big%20data%20refers%20to%20extremely,to%20grow%20exponentially%20over%20time."
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHjyU1jrtf2O6mjXNBfskDhsVqWucMalLo1sTO8LkUZhdh6w_pNc_ywmuUbdSVnartjA&usqp=CAU",
        "id": "18",
        "courseName": "Natural Language Processing",
        "channel": "",
        "courseLink": "https://www.ibm.com/topics/natural-language-processing#:~:text=Natural%20language%20processing%2C%20or%20NLP,and%20generate%20text%20and%20speech."
    },
    {
        "IMG": "https://www.leadseed.io/wp-content/uploads/2016/10/36802620122_fe3ca90fca_b.jpg",
        "id": "19",
        "courseName": "Internet of Things (IoT)",
        "channel": "",
        "courseLink": "https://www.techtarget.com/iotagenda/definition/Internet-of-Things-IoT"
    },
 
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVy-Rq3nJV9x-qZ6Cf04QIZPld2G6x4kUcSVcyaDfpbzkKpWGMb-It1D0EnqEr5_vNZTA&usqp=CAU",
        "id": "21",
        "courseName": "Data Mining",
        "channel": "",
        "courseLink": "https://bootcamp.rutgers.edu/blog/what-is-data-mining/#:"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_WN4R3fzceas4Nihaf-hWho2rBZxrrCRqRZr8-gpN4jjXkWGWyJ2lyCpH8faGyxL1Yc&usqp=CAU",
        "id": "22",
        "courseName": "Compiler Design",
        "channel": "",
        "courseLink": "https://www.geeksforgeeks.org/introduction-of-compiler-design/"
    },
   
]