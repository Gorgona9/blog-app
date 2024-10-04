<script setup lang="ts">
 import QuestionBoard from "~/components/elements/QuestionBoard.vue";
 import JustAskSidebar from "~/components/elements/JustAskSidebar.vue";
 import Tiptap from "~~/components/elements/Tiptap.vue";
 </script>

 <template>
   <div
     class="min-h-screen theme-mode bg-white dark:bg-black">
     <div class="h-32 flex justify-center">
       <div class="flex m-5">
         <img class="mx-auto h-24 w-auto" src="/img/logo_clear_fsj.png" alt="full stack dev logo" />
         <h1 class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4">
           Just Ask
         </h1>
       </div>
     </div>
     <div class="md:flex min-h-full">

       <JustAskSidebar />
       <div class="md:w-1/3 z-1 flex justify-right relative"></div>
       <QuestionBoard />
     </div>
   </div>
 </template>
