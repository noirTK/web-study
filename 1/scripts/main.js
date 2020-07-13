
const list = document.createElement('ul');
const info = document.createElement('p');
info.textContent = "동적 리스트. 페이지를 클릭해서 리스트 추가하기. 추가된 리스트 아이템을 클릭해 아이템 변경."

document.body.appendChild(info);
document.body.appendChild(list);

document.querySelector('html').onclick = function()
{
    const item = document.createElement('li');
    item.textContent = prompt('추가할 내용을 입력해주세요.');
    list.appendChild(item);

    item.onclick = function(event)
    {
        event.stopPropagation();
        this.textContent = prompt('수정할 내용을 입력해주세요.');
    }
}