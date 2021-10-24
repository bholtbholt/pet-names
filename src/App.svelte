<script>
  import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

  let name = 'Call me something cute!';
  let buttonLabel = 'Call me something';

  function getNewName() {
    buttonLabel = 'Something else';
    name = uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      separator: ' ',
      length: 2,
      style: 'capital',
    });
    navigator.clipboard.writeText(name);
  }
</script>

<h1
  style="line-height: 1.2;"
  class="text-5xl lg:text-8xl
    font-extrabold tracking-tight
    mb-8 lg:mb-12
    text-gray-800 dark:from-gray-50 dark:to-indigo-100
    dark:text-transparent bg-clip-text bg-gradient-to-b"
>
  {name}
</h1>

<button
  on:click={getNewName}
  class="text-lg py-3 lg:text-2xl lg:py-4 px-8 rounded-full
    border lg:border-2 border-purple-600 dark:border-purple-300
    text-purple-500 dark:text-purple-200 hover:text-purple-50
    hover:bg-purple-600 hover:border-transparent
    bg-transparent
    focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50
    transition duration-300 ease-in-out"
>
  {buttonLabel}
</button>
