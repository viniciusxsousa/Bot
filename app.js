const $btn = document.querySelector('.btn');

const toggle = () => {
    const $conteiner = document.querySelector('.conteiner');
    const $iconElement = document.querySelector('i');

    $conteiner.classList.toggle('active');

    if($iconElement.classList.contains('fa-share-alt')){
        $iconElement.classList.replace('fa-share-alt', 'fa-times');
    } else {
        $iconElement.classList.replace('fa-times', 'fa-share-alt');
    }

}

$btn.addEventListener('click', toggle);