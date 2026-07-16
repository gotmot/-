function analyzeData(data) {
  if (!Array.isArray(data)) {
    console.error('Ошибка: аргумент должен быть массивом');
    return;
  }

  const uniqueItems = new Set(data);
  console.log('Уникальные элементы:', [...uniqueItems]);

  const counts = new Map();
  for (const item of data) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }
  console.log('Статистика повторений:', Object.fromEntries(counts));

  // 3. Находим самый частый элемент
  let mostFrequentItem = null;
  let maxCount = 0;

  for (const [item, count] of counts.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentItem = item;
    }
  }

  if (mostFrequentItem !== null) {
    console.log(`Самый частый элемент: "${mostFrequentItem}" (встречается ${maxCount} раз)`);
  } else {
    console.log('Массив пуст, нет самого частого элемента');
  }
}
