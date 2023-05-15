function checkError() {
  if (!OK(Run1())) {
    return 'Run1Err';
  }

  if (!OK(Run2())) {
    return 'Run2Err';
  }

  if (!OK(Run3())) {
    return 'Run3Err';
  }

  if (!OK(Run4())) {
    return 'Run4Err';
  }

  return 'sukses';
}
