#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    long int dem = 0, x, y;
    long int diem_den_tho1 = 0, diem_den_tho2 = 0;
    long int a, b, c = 0; // buoc nhay cua tho
    printf("Nhap x va y: ");
    scanf("%ld %ld", &x, &y);
    printf("Nhap a va b: ");
    scanf("%d %d", &a, &b);
    for (int i = 1; i <= a; i++)
    {
        diem_den_tho1 = x + a * i;

        for (int j = 1; j <= b; j++)
        {
            diem_den_tho2 = -((b * j) - y);

            if (diem_den_tho2 == diem_den_tho1)
            {
                printf("co gap nhau tai diem %ld\n", diem_den_tho2);
                c = 1;
            }
        }
    }
    // printf(" khong gap nhau %d", c);
    if (c == 0)
    {
        printf("khong gap nhau\n");
    }

    return 0;
}