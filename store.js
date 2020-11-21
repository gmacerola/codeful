module.exports = {
  users: [
    {
      email: "gmacerola@gmail.com",
      password: "thinkful",
    },
  ],
  folders: [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "React",
    },
    {
      id: 5,
      name: "SQL",
    },
    {
      id: 6,
      name: "Postgress",
    },
  ],
  notes: [
    {
      id: 1,
      name: "Constant time O(1)",
      modified: "2018-08-15T23:00:00.000Z",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to complete. Examples of O(1) algorithms are accessing an array item or performing basic arithmetic operations (e.g., adding 2 numbers). The following is an example of an algorithm with O(1) runtime complexity.  
        'function getRandomItem(array) {
            let ticks = 0;
            // Get a random number and access that element in the array
            const item = array[Math.floor(Math.random() * array.length)];
            ticks++;
            return {
              result: item,
              ticks: ticks
            };
        }'",
    },
    {
      id: 2,
      name: "Logarithmic time O(log(n))",
      modified: "2018-03-01T00:00:00.000Z",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Logarithmic time complexity (O(log n)) is the next best thing after constant time. While logarithmic time complexity algorithms do take longer with larger inputs, running time increases slowly. For instance, if myLogRunTimeAlgo takes 1 second to complete with an input of size 10, when we increase our input by 10x to 100, the running time only grows to 2 seconds. When we increase the input size to 1000, the time only grows to 3 seconds.
        It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.
        '
        function howManyLessThanNitems(arr, n) {
          let ticks = 0;
          /* If the 1st element in the array is greater than `n`, return 0,
          because no items in the array are less than `n`. */
          if (!arr.length || arr[0] >= n) {
            ticks++;
            return 0;
          }

          let lowIndex = 0, highIndex = arr.length;

          while (highIndex > lowIndex) {
          // Find midpoint
          let midIndex = Math.floor((highIndex + lowIndex) / 2);
          /* If `midIndex` element is greater than `n`, that means all elements
          to the right of `midIndex` are also greater than `n`, so
          we only need to focus on elements to the left of `midIndex`.
          We set `highIndex` to the current value of `midIndex` so next time
          through the loop, we'll only look at the left half */
          if (arr[midIndex] >= n) {
            highIndex = midIndex;
            ticks++;
          }

          /* If the element to the right of `midIndex` is less than `n`, then we
          know that we need to check the items to the right of `midIndex`, so
          we set `lowIndex` to the current value of `midIndex`, so that next
          time through the loop we only look at the right side */
          else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            ticks++;
          }

          /* Otherwise, if the element to the right of `midIndex` is greater
          than or equal to `n`, we know that the item at `midIndex` is the last
          item that's less than `n`, so we return `midIndex +  1` to get the total
          number of items that are less than `n` */
          else {
            ticks++;
            return {
                result: midIndex + 1,
                ticks: ticks
            }
          }
        }
      }
      '
      ",
    },
    {
      id: "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Linear time O(n)",
      modified: "2019-01-04T00:00:00.000Z",
      folderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input. Given input a and input b, where b is twice as large as a, it will take a linear algorithm 2 times as long to process b compared to a.
        Some examples of linear complexity algorithms are summing the elements in an array and finding the minimum or maximum value in an array.
        '
        function findMin(array){
          let min = array[0], ticks = 1;
          for (let i = 1; i < array.length; i++) {
            ticks++;
            if (array[i] < min) {
              min = array[i];
            }
          }
          return {
            result: min,
            ticks: ticks
          };
        }
        '
      ",
    },
    {
      id: "d26e0714-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Polynomial time O(n^k)",
      modified: "2018-07-12T23:00:00.000Z",
      folderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "An algorithm with polynomial time complexity has a running time that would be some input size n raised to some constant power k. The easiest way to understand polynomial time complexity is with nested loops. An algorithm that requires 2 levels of looping over an input would be O(n^2) while one requiring 3 levels of looping would be O(n^3). In both cases, we have polynomial time complexity.
        '
        function hasDuplicates(array) {
          let ticks = 0, result = false;
          for (let i = 0; i < array.length; i++) {
            ticks++;
          for (let j = 0; j < array.length; j++) {
            ticks++;
            if (array[i] === array[j] && i !== j) {
                result = true;
            }
          }
        }
      return {
        result: result,
        ticks: ticks
      };
      }
      '
      ",
    },
    {
      id: "d26e0854-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Exponential time O(2^n)",
      modified: "2018-08-20T23:00:00.000Z",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size. For an input of size 2, an exponential time algorithm will take 2^2 = 4 time. With an input of size 10, the same algorithm will take 2^10 = 1024 time, and with an input of size 100, it will take 2^100 = 1.26765060022823 * 1030 time.
        '
        function countTriangle(layers) {
          let ticks = 1;
          let count = 0; // the number of dots we've counted so far
          let layer = 0; // the current layer we're on
          let lastLayer = 1; // the number of dots we counted in the previous layer
          while (layer < layers) {
            ticks++;
            let newLayer = 0; // the number of dots we've counted so far in the current layer
            for (let i = 0; i < lastLayer; i++) {
              ticks++;
              newLayer += 2;
            }
            lastLayer = newLayer;
            count += lastLayer;
            layer++;
          }
          return {
            result: count,
            ticks: ticks
          };
        }
        '
    ",
    },
    {
      id: "d26e0980-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Tigers",
      modified: "2018-03-03T00:00:00.000Z",
      folderId: "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Eaque aliquid sit. Ducimus consequatur nam. Corporis ut dolorum amet molestiae minima ut quasi nesciunt. Ad omnis et. Dolorem nemo id non voluptatem mollitia sit laudantium. Consequatur quia consequuntur praesentium perferendis alias molestiae voluptatem qui temporibus.\n \rRerum tempore sed eum delectus excepturi odio. Ipsam omnis occaecati qui. Ut aspernatur et et est consequatur architecto laboriosam. Voluptates ullam beatae vero.\n \rAmet magnam neque temporibus totam aperiam aut dignissimos. Voluptas aut est ut quisquam totam. Dolor quibusdam nesciunt voluptatem cum sit harum in dicta. Sed nostrum et veniam id hic voluptatem inventore quo. Ipsam officiis unde dolor eum est dolores qui itaque aspernatur. Magnam aliquam qui qui.",
    },
    {
      id: "d26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Wolves",
      modified: "2018-05-16T23:00:00.000Z",
      folderId: "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Expedita mollitia et. Voluptates optio expedita. Esse ullam numquam quae rem. Cum esse itaque et. Corrupti nam illum debitis ipsa excepturi neque rem totam. Repellendus consequatur qui itaque distinctio ut esse ut est.\n \rCulpa a impedit dignissimos. Eos nam totam delectus tempora autem nulla. Id nobis dolores. Minima autem vel provident quo temporibus.\n \rQuis modi eius voluptas fugit dolorem est reiciendis blanditiis. Labore minus qui ab dolorem eos repellat deleniti. Omnis assumenda non. Distinctio voluptas ea fugit corporis. Maiores et occaecati.",
    },
    {
      id: "d26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Elephants",
      modified: "2018-04-11T23:00:00.000Z",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Rem enim voluptatem autem fuga possimus. Perferendis voluptatem labore vero veritatis laborum aspernatur molestiae. Enim et quibusdam harum ab velit ad occaecati. Incidunt repellendus quidem rem quia quasi veritatis reiciendis. Quas omnis nam. Quo quisquam occaecati deleniti reiciendis quo temporibus cupiditate consequatur.\n \rSit ullam aut harum sunt rerum error. Quod omnis asperiores sed illum molestiae. Doloremque perspiciatis voluptas vel. Vel esse architecto ut quibusdam laudantium ut et.\n \rRecusandae quo sed quis ratione voluptates nam dolorem consequatur id. Dolores nesciunt illo possimus impedit. Perferendis ea sequi pariatur cumque. Iste nisi perspiciatis. Cumque repellendus optio voluptas maiores nobis. Accusantium sit hic eius occaecati veritatis qui asperiores illum.",
    },
    {
      id: "d26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Lions",
      modified: "2018-04-26T23:00:00.000Z",
      folderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex numquam et nostrum dolores voluptatibus. Ut dolores qui voluptatibus. Debitis fuga similique sapiente est perspiciatis.\n \rQuis magni quod iusto ipsum laboriosam suscipit excepturi. Dignissimos praesentium eum explicabo recusandae voluptates. Aliquid laboriosam aperiam sapiente aspernatur mollitia tempore deleniti.\n \rDolor ratione nam ut. Ad eum vel. Eos iusto modi praesentium. Nihil eos libero rerum expedita. Corrupti aut exercitationem eveniet sunt.",
    },
    {
      id: "d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Monkeys",
      modified: "2018-02-05T00:00:00.000Z",
      folderId: "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere.\n \rQuos recusandae vitae earum minima quidem sapiente repellat. Veniam inventore ut. Ad quibusdam aliquam id in nihil iste qui nobis. Quidem distinctio eos explicabo.\n \rEa enim rerum deleniti quo earum. Provident fugit eum dolore sequi nobis. Architecto molestias odio et doloremque pariatur facere modi. Eum et est blanditiis delectus at est maiores vel velit. Eligendi velit dicta enim omnis.",
    },
    {
      id: "d26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Bats",
      modified: "2018-12-01T00:00:00.000Z",
      folderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Non porro est mollitia nobis. Eveniet possimus non et mollitia non.\n \rNecessitatibus dolor eaque consectetur ullam quia ad vero. Dolores dolore minus consequatur itaque a corporis sit provident dicta. Ad in tempora ex consequuntur autem accusantium veritatis. Quia a odit qui autem repellendus et perspiciatis harum. Molestias iste at dicta optio vel nulla enim.\n \rAliquid recusandae optio numquam tempora totam voluptatum inventore. Minus ipsum vel officiis consectetur repudiandae unde necessitatibus in. Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    },
    {
      id: "d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Turtles",
      modified: "2018-09-11T23:00:00.000Z",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore eum hic nesciunt enim corporis necessitatibus. Iusto pariatur aut qui blanditiis.\n \rTempore et vel ut maxime et reprehenderit deleniti esse officia. Laboriosam et reiciendis distinctio qui enim. Amet suscipit sit.\n \rVitae id impedit reprehenderit eveniet nesciunt et soluta. Labore aliquam sed dolores voluptatibus est omnis quo molestias aut. Dolor optio sed alias excepturi delectus aut consequuntur veniam nemo.",
    },
    {
      id: "d26e1452-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Zebras",
      modified: "2018-08-13T23:00:00.000Z",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Veritatis porro minima perspiciatis. Repellat veniam quo iste ut. Iusto voluptas quae quibusdam. Odit neque iusto cupiditate iste quam. Fuga itaque aut praesentium ullam saepe ut et vero.\n \rQuisquam doloremque molestiae. Enim rerum dolorem et velit itaque magnam laborum. Aut officiis porro.\n \rQuae eum eaque error. Sed itaque ipsam nam provident aut voluptate. Perferendis repudiandae sequi laudantium est est animi eum. Unde alias et doloribus est hic et. Sed distinctio incidunt maiores aut voluptatibus et omnis mollitia fugit.",
    },
  ],
};
