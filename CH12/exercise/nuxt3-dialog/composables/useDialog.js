export const dialogData = ref({
  title: "",
  content: "",
  confirm: {
    btnName: "",
    onComplete: () => { },
  },
  cancel: {
    btnName: "",
    onComplete: () => { },
  },
})

export const useDialog = () => {
  const dialogRef = ref(null);
  const open = (options) => {
    if (options) {
      dialogData.value.title = options.title || '預測標題';
      dialogData.value.content = options.content || '預測內容';
      dialogData.value.confirm = options.confirm;
      dialogData.value.cancel = options.cancel;

      dialogData.value.confirm.btnName = options.confirm.btnName || 'O';
      dialogData.value.cancel.btnName = options.cancel.btnName || 'X';
    }
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
    dialogRef.value.showModal();
  };
  const close = (type) => {
    if (dialogData.value[type].onComplete) {
      dialogData.value[type].onComplete();
    }

    dialogRef.value.close();
  };

  onMounted(() => {
    dialogRef.value = document.querySelector("#dialog");
  });
  return { open, close };
};
