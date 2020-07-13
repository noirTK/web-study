const list = document.createElement('ul');
const info = document.createElement('p');

info.textContent = "화면을 클릭해 리스트에 아이템을 입력하세요. 리스트 안의 아이템을 클릭하여 아이템을 수정할 수도 있습니다."
document.body.appendChild(info);
document.body.appendChild(list);

document.querySelector('html'),onclick = function()
{
    const item = document.createElement('li');
    item.textContent = prompt("리스트에 추가하기를 희망하는 아이템을 입력하세요.");
    list.appendChild(item);
    
    item.onclick = function(event)
    {
        event.stopPropagation();
        this.textContent = prompt("변경하기를 희망하는 아이템을 입력해주세요.");
    }
}