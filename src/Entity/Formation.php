<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FormationRepository")
 */
class Formation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=5, max=255, minMessage="Votre nom de formation doit comporter au moins {{ limit }} caractères", maxMessage="Votre nom de formation ne peut pas contenir plus de {{ limit }} caractères")
     */
    private $nameEducation;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=5, max=255, minMessage="Votre nom d'école doit comporter au moins {{ limit }} caractères", maxMessage="Votre nom d'école ne peut pas contenir plus de {{ limit }} caractères")
     */
    private $nameSchool;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=5, max=5, maxMessage="Votre code postal d'école ne peut pas contenir plus de {{ limit }} caractères", maxMessage="Votre code postal d'école ne peut pas contenir plus de {{ limit }} caractères")
     */
    private $postCode;
    
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(max=255, maxMessage="Votre lieu d'école ne peut pas contenir plus de {{ limit }} caractères")
     */
    private $place;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(min=5, max=255, minMessage="Votre spécialité doit comporter au moins {{ limit }} caractères",maxMessage="Votre spécialité ne peut pas contenir plus de {{ limit }} caractères")
     */
    private $specialty;

    /**
     * @ORM\Column(type="date")
     */
    private $year;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameEducation(): ?string
    {
        return $this->nameEducation;
    }

    public function setNameEducation(string $nameEducation): self
    {
        $this->nameEducation = $nameEducation;

        return $this;
    }

    public function getNameSchool(): ?string
    {
        return $this->nameSchool;
    }

    public function setNameSchool(string $nameSchool): self
    {
        $this->nameSchool = $nameSchool;

        return $this;
    }

    public function getPostCode(): ?string
    {
        return $this->postCode;
    }

    public function setPostCode(string $postCode): self
    {
        $this->postCode = $postCode;

        return $this;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(string $place): self
    {
        $this->place = $place;

        return $this;
    }

    public function getSpecialty(): ?string
    {
        return $this->specialty;
    }

    public function setSpecialty(?string $specialty): self
    {
        $this->specialty = $specialty;

        return $this;
    }

    public function getYear(): ?\DateTimeInterface
    {
        return $this->year;
    }

    public function setYear(\DateTimeInterface $year): self
    {
        $this->year = $year;

        return $this;
    }
}
