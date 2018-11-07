import csv


with open('populationbycountry19802010millions.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    breakpoint()
    for row in reader:
        print(row)