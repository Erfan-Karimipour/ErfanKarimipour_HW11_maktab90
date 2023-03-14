export function addNewTr(TaskName,Priority,Status,Deadline){
    let tbody=document.querySelector(`tbody`);
    let NewTd=document.createElement(`tr`);
    NewTd.innerHTML=`
    <td class="border-2 px-5 py-2 w-1/5" id=${Date.now()}>
    ${TaskName}
  </td>
  <td class="border-2 px-5 py-2 w-1/5 text-center">
  ${Priority}
  </td>
  <td class="border-2 px-5 py-2 w-1/5 text-center">
  ${Status}
  </td>
  <td class="border-2 px-5 py-2 w-1/5 text-center">
  ${Deadline}
  </td>
  <td class="border-2 px-5 py-2 w-1/5 text-center">
  <ion-icon name="trash-outline" class="bg-red-600 text-white p-1 cursor-pointer"></ion-icon>
  <ion-icon name="pencil-outline" class="bg-blue-600 text-white p-1 cursor-pointer"></ion-icon>
  <ion-icon name="eye-outline" class="bg-gray-600 text-white p-1 cursor-pointer"></ion-icon>
  </td>
    `
    tbody.append(NewTd);
}