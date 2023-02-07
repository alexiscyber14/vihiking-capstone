const menu = document.getElementById('menu');
const open = document.getElementById('open');
const shut = document.getElementById('close');

open.addEventListener('click', () => {
  menu.style.left = '0%';
  shut.style.display = 'block';
});

shut.addEventListener('click', () => {
  menu.style.left = '-100%';
  shut.style.display = 'none';
});

const guides = [
    {
      id: 1,
      name:"Greener Walkot",
      skills:"State of colorado Cerrtified mountain climbing guide",
      description:"A mountain tour guide since 2010, certified and trained to keep you safe on the mountain treks.",
      image:'greener.jpg',
    },
    {
        id: 2,
        name:"Mathew Maccon",
        skills:"Internatiolly recognised sailor guide.",
        description:"Sailing since 2005, I have unlimited skills on the sea and sure to make it an enjoyable one.",
        image:'mathew maccon.jpg',
      },
      {
        id: 3,
        name:"Celine Portier",
        skills:"Free fall world record holder since 2015",
        description:"Aero performer and free fall legend, I promise to make i the best experience ever.",
        image:'ladies.avif',
        
      },
      {
        id: 4,
        name:"Paul Cunning",
        skills:"Renoun explorere and arctic expeditions guide",
        description:"Wanna see the norher lights or see polar bears, I am your guy for these kind of things.",
        image:'paul.jpg',
      },
      {
        id: 5,
        name:"Barbara Estess",
        skills:"Certiied and skilled jungle guide of the amazonas.",
        description:"Vistit the amazonas with expert guidance of myself and my team. ",
        image:'nicki.webp',
      },
      {
        id: 6,
        name:"cheng Ho",
        skills:"Certiied and skilled jungle guide of the amazonas.",
        description:"Vistit the amazonas with expert guidance of myself and my team. ",
        image:'mathew maccon.jpg',
      },
  ];
  const contain = document.querySelector('.wrapper-2');
  guides.forEach((guide) => {
    const card = document.createElement('div');
    card.className = 'card';
    contain.appendChild(card);

    const guideImageDiv = document.createElement('div');
    guideImageDiv.className='guide-image'
    const guideImage = document.createElement('img');
    guideImage.src = guide.image;
    guideImageDiv.appendChild(guideImage)
    card.appendChild(guideImageDiv)

    const guideDetailDiv = document.createElement('div');
    guideDetailDiv.className='guide-details'
    const detailshthree = document.createElement('h4');
    const guideName = document.createTextNode(guide.name)
    detailshthree.appendChild(guideName)
    guideDetailDiv.appendChild(detailshthree)

    const span = document.createElement('span');
    const spanText = document.createTextNode(guide.skills)
    span.appendChild(spanText)
    guideDetailDiv.appendChild(span)

    const line = document.createElement('p');
    line.className = 'line-two'
    guideDetailDiv.appendChild(line)

    const detailP = document.createElement('p');
    detailP.className='mine-act'
    const detailpText = document.createTextNode(guide.description)
    detailP.appendChild(detailpText)
    guideDetailDiv.appendChild(detailP)
    card.appendChild(guideDetailDiv) 
  })

  const cardSectionButton = document.createElement('h3');
  cardSectionButton.className='bottoms-button';
  const footerButton = document.createElement('button');
  footerButton.className ='show-more'
  footerButton.innerHTML ='more<i class="fa fa-angle-down"></i>'
  cardSectionButton.appendChild(footerButton)
  contain.appendChild(cardSectionButton)

  //show more button

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
