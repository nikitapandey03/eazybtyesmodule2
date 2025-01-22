// const  sideMenu = document.querySelector('aside');
// const menuBtn = document.querySelector('#menu_bar');
// const closeBtn = document.querySelector('#close_btn');


// const themeToggler = document.querySelector('.theme-toggler');



// menuBtn.addEventListener('click',()=>{
//        sideMenu.style.display = "block"
// })
// closeBtn.addEventListener('click',()=>{
//     sideMenu.style.display = "none"
// })

// themeToggler.addEventListener('click',()=>{
//      document.body.classList.toggle('dark-theme-variables')
//      themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
//      themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
// })



const chart = document.querySelector('#chart').getContext('2d');

// create a new chart instance //
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mart', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mart', 'Apr'],

        datasets: [
            {
                label: 'GOLD',
                data: [1796, 1908, 1936, 1895, 1836, 1807, 1765, 1710, 1660, 1632, 1768, 1822, 1928, 1881],
                borderColor: 'green',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [2688, 2922, 3282, 2728, 1940, 1071, 1679, 1554, 1328, 1572, 1294, 1194, 1585, 1677],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

// show or hide sidebar //

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// change theme //
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})















