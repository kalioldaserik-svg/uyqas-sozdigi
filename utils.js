// Соңғы әріптерді салыстыру арқылы ұйқас тексеру
function uyqaspa(soz1, soz2, n = 3) {
  if (soz1.length < n || soz2.length < n) return false;
  const a = soz1.slice(-n).toLowerCase();
  const b = soz2.slice(-n).toLowerCase();
  return a === b;
}

// Кездейсоқ тест сөздер (қажет болса, арттыруға болады)
const sozdik = [
  "жол", "қол", "шол", "мол", "гүл", "күл", "түн", "күн", "жыр", "сыр",
  "аспан", "жасқан", "тастан", "баян", "заман", "аман", "таң", "жаң"
];
