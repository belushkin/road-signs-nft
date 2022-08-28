const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('RoadSignsNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract deployed to:", nftContract.address);

    const cities = ["Станіслав","Херсон","Нова Збур'ївка","Залізний порт","Гола пристань","Олешки","Антонівка","Нова Каховка","Виноградове",
    "Лазурне","Каланчак","Чаплинка","Каховка","Берислав","Лозове","Борозенське","Олександрівка","Любимівка","Асканія-Нова","Новотроїцьке","Новоолексіївка",
    "Горностаївка","Велика Лепетиха","Верхній Рогачик","Нижні Сірогози","Агаймани","Іванівка","Новотроїцьке","Генічеськ","Армянськ","Красноперекопськ",
    "Чорноморське","Євпаторія","Джанкой","Красногвардійське","Гвардійське","Саки","Севастополь","Сімферополь","Бахчисарай","Ялта","Гурзуф",
    "Алушта","Білогірськ","Судак","Старий Крим","Феодосія","Приморський","Щолкіне","Керч","Кирилівка","Якимівка","Костянтинівка","Веселе",
    "Енергодар","Дніпрорудне","Михайлівка","Мелітополь","Приазовське","Астраханка","Василівка","Токмак","Молочанськ","Пологи","Чернігівка","Єлисеївка",
    "Приморськ","Бердянськ","Кам'янка","Розівка","Нікольске","Мангуш","Маріуполь","Новоазовськ","Бойківське","Волноваха","Докучаєвськ","Кальміуське",
    "Оленівка","Донецьк","Макіївка","Харцизьк","Іловайськ","Амвросіївка","Ясинувата","Єнакієве","Горлівка","Зугрес","Чистякове","Шахтарськ","Сніжне",
    "Боково-Хрустальне","Хрустальний","Пелагіївка","Хрестівка","Бунге","Антрацит","Ровеньки","Дебальцеве","Світлодарськ","Брянка","Теплогірськ",
    "Попасна","Первомайськ","Кадіївка","Алчевськ","Перевальск","Петрово-Красносілля","Голубівка","Гірське","Золоте","Тошківка","Ювілейне","Лутугине",
    "Щастя","Довжанськ","Вознесенівка","Сорокине","Суходільск","Молодогвардійськ","Луганськ","Станиця Луганська","Петропавлівка","Лисичанськ",
    "Северодонецьк","Новоайдар","Широкий","Привілля","Новодружеськ","Кремінна","Лиман","Рубіжне","Ізюм","Сватове","Борова","Містки","Старобільськ",
    "Веселе","Біловодськ","Бараниківка","Мілове","Марківка","Бугаївка","Савинці","Балаклія","Новопсков","Марківка","Білолуцьк","Троїцьке","Нижня Дуванка",
    "Ківшарівка","Куп'янськ","Великий Бурлук","Вовчанськ","Липці","Козача Лопань"];

    const coordinates = [
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[750,25],[600,100],[600,100],[600,100],[750,25],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[750,25],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[750,25],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[750,25],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],[600,100],
      [600,100],[600,100]];

    for (i=0; i < cities.length; i++) {
      // Wait for it to be mined.
      let txn = await nftContract.mintNFT(cities[i], coordinates[i][1], coordinates[i][0])
      await txn.wait()
      if (i == 0) break;
    }
  };

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();