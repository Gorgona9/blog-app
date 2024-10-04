<script setup lang="ts">
import QuestionForm from "~/components/elements/QuestionForm.vue";
import JustAskSidebar from "~/components/elements/JustAskSidebar.vue";

definePageMeta({
 middleware: 'auth'
})

const data: IQuestionPost = reactive({
    title: '',
    description: ''
  })

const endpoint = '/api/just-ask/ask'


</script>

 <template>

 <div
  class="min-h-full theme-mode bg-white dark:bg-black">

  <div class="h-32 flex justify-center">
   <div class="flex m-5">
    <img class="mx-auto h-24 w-auto" src="/img/logo_clear_fsj.png" alt="full stack dev logo" />
    <h1 class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4">
     Just Ask
    </h1>
   </div>
  </div>
  <div class="md:flex">

   <JustAskSidebar />
   <div class="md:w-1/3 z-1 flex justify-right relative"></div>
   <div v-if="true" class="w-full md:w-1/3 h-screen">

    <QuestionForm  :data="data" :endpoint="endpoint" />
   </div>
  </div>
 </div>

</template>
