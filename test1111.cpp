#include <iostream>
using namespace std;
int main()
{
  char s[] = "toilalaptrinhvien";
  int count = 0;
  while (s[count] != '\0')
    count++;
  cout << "So luong ki tu: " << count << endl;
  system("pause");
  return 0;
}