<template>
  <div
    class="fixed grid h-full w-64 flex-shrink-0 grid-rows-[auto_1fr_auto] border-r border-solid border-r-gray-100 bg-white"
  >
    <PagesCommonLogo />
    <div class="flex w-full flex-col">
      <PagesMenuItem to="/" icon="home"> HOME </PagesMenuItem>
      <PagesMenuItem to="/info" icon="home"> INFO  </PagesMenuItem>
      <PagesMenuItem to="/exams" icon="menu"> EXAMS</PagesMenuItem>
      <PagesMenuItem to="/courses" icon="menu"> COURSES </PagesMenuItem>
      <PagesMenuItem to="/timetable" icon="orders"> TIMETABLE </PagesMenuItem>
      <PagesMenuItem to="/results" icon="orders"> RESULTS </PagesMenuItem>
      <PagesMenuItem to="/messages" icon="messages"> MESSAGES </PagesMenuItem>
    </div>
    <div class="flex w-full flex-col">
      <PagesMenuItem to="/me" icon="me"> ME </PagesMenuItem>
      <div class="p-4">
        <Button @click="logout" variant="outlined">LOGOUT</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
