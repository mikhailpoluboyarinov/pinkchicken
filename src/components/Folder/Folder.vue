<template>
    <section class="folder folder__mobile--hidden">
      <h1 class="folder__title">
        Файлы
      </h1>
      <div class="folder__wrapper">
        <img class="folder__img" src="../../assets/images/folder.png">
        <p class="folder__paragraph">Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
      </div>
    </section>
    <section class="folder__mobile">
      <div class="folder__buttons">
        <button class="folder__button folder__button--active">Медиапланы</button>
        <button class="folder__button">Отчеты</button>
      </div>
    </section>
</template>

<script>
export default {
  name: "Folder"
}
</script>

<style scoped>
    @import "Folder.scss";
</style>