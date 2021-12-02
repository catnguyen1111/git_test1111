#include <conio.h>
#include <stdio.h>
#define ENTER 13
int main()
{
    int so_chu = 0, so = 0, so_ki_tu = 0;
    char str = 0; // khai báo chuỗi str chứa tối đa 29 kí tự
    printf(" Xin hay nhap vao mot chuoi ");
    while (str != ENTER)
    {
        scanf(" %c", &str);
        printf("\nChuoi str nhan duoc la: %c\n", str);
        if (str >= '0' && str <= '9')
        {
            so++;
        }
        else if ((str >= 'a') && (str <= 'z') || (str >= 'A') && (str <= 'Z'))
        {
            so_chu++;
        }
        else
        {
            so_ki_tu++;
        }
        if (str == ENTER)
        {
            break;
        }
        printf(" so chu so da nhap: %d\n", so);
        printf(" so ki tu : %d\n", so_chu);
        printf(" so ki tu khac: %d\n", so_ki_tu);
    }

    // printf(" so chu so da nhap: %d\n", so);
    // printf(" so ki tu : %d\n", so_chu);
    // printf(" so ki tu khac: %d\n", so_ki_tu);
    return 0;
}
